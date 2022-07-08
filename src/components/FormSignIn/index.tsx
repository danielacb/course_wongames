import { Email, Lock, ErrorOutline } from '@styled-icons/material-outlined'
import { signIn } from 'next-auth/client'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FormEvent, useState } from 'react'

import Button from 'components/Button'
import { FormError, FormLink, FormWrapper } from 'components/Form'
import TextField from 'components/TextField'

import * as S from './styles'
import { FieldErrors, signInValidate } from 'utils/validations'

const FormSignIn = () => {
  const [values, setValues] = useState({ email: '', password: '' })
  const [loading, setLoading] = useState(false)
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({})
  const [formError, setFormError] = useState('')
  const { push } = useRouter()

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    setLoading(true)

    const errors = signInValidate(values)

    if (Object.keys(errors).length) {
      setFieldErrors(errors)
      setLoading(false)
      return
    }

    setFieldErrors({})
    setFormError('')

    const result = await signIn('credentials', {
      ...values,
      redirect: false,
      callbackUrl: '/'
    })

    if (result?.url) {
      push(result.url)
    }

    if (result?.error) setFormError('user not found or password is invalid')

    setLoading(false)
  }

  const handleInput = (field: 'email' | 'password', value: string) => {
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
          name="email"
          placeholder="Email"
          type="email"
          icon={<Email />}
          onInputChange={(value) => handleInput('email', value)}
          error={fieldErrors?.email}
        />
        <TextField
          name="password"
          placeholder="Password"
          type="password"
          autoComplete="off"
          icon={<Lock />}
          onInputChange={(value) => handleInput('password', value)}
          error={fieldErrors?.password}
        />
        <S.ForgotPassword href="#">Forgot your password?</S.ForgotPassword>

        <Button type="submit" fullWidth size="large" loading={loading}>
          Sign in now
        </Button>

        <FormLink>
          Don’t have an account?{' '}
          <Link href="/signup">
            <a>Sign up</a>
          </Link>
        </FormLink>
      </form>
    </FormWrapper>
  )
}
export default FormSignIn
