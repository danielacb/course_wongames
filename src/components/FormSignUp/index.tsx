import Link from 'next/link'
import { AccountCircle, Email, Lock } from '@styled-icons/material-outlined'

import TextField from 'components/TextField'
import Button from 'components/Button'

import { FormWrapper, FormLink } from 'components/Form'

const FormSignUp = () => (
  <FormWrapper>
    <form>
      <TextField
        name="name"
        id="name"
        placeholder="Name"
        type="name"
        icon={<AccountCircle />}
      />
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
      <TextField
        name="confirm-password"
        id="confirm-password"
        placeholder="Confirm password"
        type="confirm-password"
        icon={<Lock />}
      />
      <Button fullWidth size="large">
        Sign up now
      </Button>
      <FormLink>
        Already have an account?{' '}
        <Link href="/signin">
          <a>Sign in</a>
        </Link>
      </FormLink>
    </form>
  </FormWrapper>
)

export default FormSignUp
