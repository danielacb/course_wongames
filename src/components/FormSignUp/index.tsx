import { useMutation } from '@apollo/client'
import {
  AccountCircle,
  Email,
  ErrorOutline,
  Lock
} from '@styled-icons/material-outlined'
import Button from 'components/Button'
import { FormError, FormLink, FormWrapper } from 'components/Form'
import TextField from 'components/TextField'
import { UsersPermissionsRegisterInput } from 'graphql/generated/globalTypes'
import { MUTATION_REGISTER } from 'graphql/mutations/register'
import { signIn } from 'next-auth/client'
import Link from 'next/link'
import { FormEvent, useState } from 'react'
import { FieldErrors, signUpValidate } from 'utils/validations'

const FormSignUp = () => {
  const [values, setValues] = useState<UsersPermissionsRegisterInput>({
    username: '',
    email: '',
    password: ''
  })
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({})
  const [formError, setFormError] = useState('')

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    setFormError('')

    const errors = signUpValidate(values)

    if (Object.keys(errors).length) {
      setFieldErrors(errors)
      return
    }

    setFieldErrors({})

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
    field: 'username' | 'email' | 'password' | 'confirm_password',
    value: string
  ) => {
    setValues((prevState) => ({ ...prevState, [field]: value }))
  }

  const [createUser, { error, loading }] = useMutation(MUTATION_REGISTER, {
    onError: (err) =>
      setFormError(
        err?.graphQLErrors[0]?.extensions?.exception.data.message[0].messages[0]
          .message
      ),

    onCompleted: () => {
      !error &&
        signIn('credentials', {
          email: values.email,
          password: values.password,
          callbackUrl: '/'
        })
    }
  })
  return (
    <FormWrapper>
      {!!formError && (
        <FormError>
          <ErrorOutline /> {formError}
        </FormError>
      )}

      <form onSubmit={handleSubmit}>
        <TextField
          name="username"
          placeholder="Username"
          type="text"
          icon={<AccountCircle />}
          onInputChange={(value) => handleInput('username', value)}
          error={fieldErrors?.username}
        />
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
        <TextField
          name="confirm_password"
          placeholder="Confirm password"
          type="password"
          icon={<Lock />}
          onInputChange={(value) => handleInput('confirm_password', value)}
          error={fieldErrors?.confirm_password}
        />
        <Button
          type="submit"
          fullWidth
          size="large"
          loading={loading}
          disabled={loading}
        >
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
