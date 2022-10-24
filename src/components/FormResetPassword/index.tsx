import { FormEvent, useState } from 'react'

import { ErrorOutline, Lock } from '@styled-icons/material-outlined'
import { signIn } from 'next-auth/client'
import { useRouter } from 'next/router'
import { FieldErrors, resetPasswordValidate } from 'utils/validations'

import Button from 'components/Button'
import { FormError, FormWrapper } from 'components/Form'
import TextField from 'components/TextField'

const FormResetPassword = () => {
  const [values, setValues] = useState({ password: '', confirm_password: '' })
  const [loading, setLoading] = useState(false)
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({})
  const [formError, setFormError] = useState('')
  const { query } = useRouter()

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    setLoading(true)

    const errors = resetPasswordValidate(values)

    if (Object.keys(errors).length) {
      setFieldErrors(errors)
      setLoading(false)
      return
    }

    setFieldErrors({})
    setFormError('')

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/reset-password`,
      {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          code: query.code,
          password: values.password,
          passwordConfirmation: values.confirm_password
        })
      }
    )

    const data = await response.json()
    setLoading(false)

    if (data.error) {
      setFormError(data.message[0].messages[0].message)
      setLoading(false)
    } else {
      signIn('credentials', {
        email: data.user.email,
        password: values.password,
        callbackUrl: '/'
      })
    }
  }

  const handleInput = (
    field: 'password' | 'confirm_password',
    value: string
  ) => {
    setValues((prevState) => ({ ...prevState, [field]: value }))
  }

  return (
    <FormWrapper>
      {!!formError && (
        <FormError>
          <ErrorOutline /> {formError}
        </FormError>
      )}

      <form onSubmit={handleSubmit}>
        <TextField
          name="password"
          placeholder="New password"
          type="password"
          autoComplete="off"
          icon={<Lock />}
          onInputChange={(value) => handleInput('password', value)}
          error={fieldErrors?.password}
        />
        <TextField
          name="confirm_password"
          placeholder="Confirm password"
          type="password"
          icon={<Lock />}
          onInputChange={(value) => handleInput('confirm_password', value)}
          error={fieldErrors?.confirm_password}
        />

        <Button type="submit" fullWidth size="large" loading={loading}>
          Reset password
        </Button>
      </form>
    </FormWrapper>
  )
}
export default FormResetPassword
