import { useRouter } from 'next/router'
import {
  CheckCircleOutline,
  Email,
  ErrorOutline
} from '@styled-icons/material-outlined'
import { FormEvent, useState } from 'react'

import Button from 'components/Button'
import { FormError, FormSuccess, FormWrapper } from 'components/Form'
import TextField from 'components/TextField'

import { FieldErrors, requestPasswordValidate } from 'utils/validations'
import Heading from 'components/Heading'

const FormRequestPassword = () => {
  const { query } = useRouter()
  const [values, setValues] = useState({ email: (query.email as string) || '' })
  const [loading, setLoading] = useState(false)
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({})
  const [formError, setFormError] = useState('')
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    setLoading(true)

    const errors = requestPasswordValidate(values)

    if (Object.keys(errors).length) {
      setFieldErrors(errors)
      setLoading(false)
      return
    }

    setFieldErrors({})
    setFormError('')

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/forgot-password`,
      {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(values)
      }
    )

    const data = await response.json()
    setLoading(false)

    if (data?.error) {
      setFormError(data.message[0].messages[0].message)
    } else {
      setSuccess(true)
    }
  }

  const handleInput = (field: 'email', value: string) => {
    setValues((prevState) => ({ ...prevState, [field]: value }))
  }

  return (
    <FormWrapper>
      {!!formError && (
        <FormError>
          <ErrorOutline /> {formError}
        </FormError>
      )}

      {success ? (
        <FormSuccess>
          <Heading color="black" size="small">
            <CheckCircleOutline /> E-mail sent!
          </Heading>
          Check your inbox for instructions to reset your password
        </FormSuccess>
      ) : (
        <>
          <form onSubmit={handleSubmit}>
            <TextField
              name="email"
              placeholder="Email"
              type="text"
              icon={<Email />}
              initialValue={query.email as string}
              onInputChange={(value) => handleInput('email', value)}
              error={fieldErrors?.email}
            />

            <Button type="submit" fullWidth size="large" loading={loading}>
              Send reset email
            </Button>
          </form>
        </>
      )}
    </FormWrapper>
  )
}
export default FormRequestPassword
