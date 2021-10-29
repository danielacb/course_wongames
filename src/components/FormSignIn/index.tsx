import Link from 'next/link'

import TextField from 'components/TextField'
import { Lock, Email } from '@styled-icons/material-outlined'

import * as S from './styles'
import Button from 'components/Button'

const FormSignIn = () => (
  <S.Wrapper>
    <form>
      <TextField
        name="email"
        id="email"
        placeholder="Email"
        type="email"
        icon={<Email />}
      />
      <TextField
        name="password"
        id="password"
        placeholder="Password"
        type="password"
        icon={<Lock />}
      />
      <S.ForgotPassword href="#">Forgot your password?</S.ForgotPassword>

      <Button fullWidth size="large">
        Sign in now
      </Button>

      <S.FormLink>
        Don’t have an account?
        <Link href="/signup">
          <a> Sign up</a>
        </Link>
      </S.FormLink>
    </form>
  </S.Wrapper>
)

export default FormSignIn
