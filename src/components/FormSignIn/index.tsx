import { Email, Lock } from '@styled-icons/material-outlined'
import { signIn } from 'next-auth/client'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FormEvent, useState } from 'react'

import Button from 'components/Button'
import { FormLink, FormWrapper } from 'components/Form'
import TextField from 'components/TextField'

import * as S from './styles'

const FormSignIn = () => {
  const [values, setValues] = useState({})
  const { push } = useRouter()

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    const result = await signIn('credentials', {
      ...values,
      redirect: false,
      callbackUrl: '/'
    })

    if (result?.url) {
      push(result.url)
    }

    console.error('invalid email or password')
  }

  const handleInput = (field: 'email' | 'password', value: string) => {
    setValues((prevState) => ({ ...prevState, [field]: value }))
  }

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit}>
        <TextField
          name="email"
          placeholder="Email"
          type="email"
          icon={<Email />}
          onInputChange={(value) => handleInput('email', value)}
        />
        <TextField
          name="password"
          placeholder="Password"
          type="password"
          autoComplete="off"
          icon={<Lock />}
          onInputChange={(value) => handleInput('password', value)}
        />
        <S.ForgotPassword href="#">Forgot your password?</S.ForgotPassword>

        <Button type="submit" fullWidth size="large">
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
