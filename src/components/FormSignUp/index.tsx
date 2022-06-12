import { useMutation } from '@apollo/client'
import { AccountCircle, Email, Lock } from '@styled-icons/material-outlined'
import Button from 'components/Button'
import { FormLink, FormWrapper } from 'components/Form'
import TextField from 'components/TextField'
import { UsersPermissionsRegisterInput } from 'graphql/generated/globalTypes'
import { MUTATION_REGISTER } from 'graphql/mutations/register'
import Link from 'next/link'
import { FormEvent, useState } from 'react'

const FormSignUp = () => {
  const [values, setValues] = useState<UsersPermissionsRegisterInput>({
    username: '',
    email: '',
    password: ''
  })

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    createUser({
      variables: {
        input: {
          username: values.username,
          email: values.email,
          password: values.password
        }
      }
    })
  }

  const handleInput = (
    field: 'username' | 'email' | 'password' | 'confirm-password',
    value: string
  ) => {
    setValues((prevState) => ({ ...prevState, [field]: value }))
  }

  const [createUser] = useMutation(MUTATION_REGISTER)
  return (
    <FormWrapper>
      <form onSubmit={handleSubmit}>
        <TextField
          name="username"
          placeholder="Username"
          type="text"
          icon={<AccountCircle />}
          onInputChange={(value) => handleInput('username', value)}
        />
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
        <TextField
          name="confirm-password"
          placeholder="Confirm password"
          type="password"
          icon={<Lock />}
          onInputChange={(value) => handleInput('confirm-password', value)}
        />
        <Button type="submit" fullWidth size="large">
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
}
export default FormSignUp
