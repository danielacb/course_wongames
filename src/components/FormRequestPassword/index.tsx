import { Email, ErrorOutline } from '@styled-icons/material-outlined'
import { FormEvent, useState } from 'react'

import Button from 'components/Button'
import { FormError, FormWrapper } from 'components/Form'
import TextField from 'components/TextField'

import { FieldErrors, requestPasswordValidate } from 'utils/validations'

const FormRequestPassword = () => {
  const [values, setValues] = useState({ email: '' })
  const [loading, setLoading] = useState(false)
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({})
  const [formError, setFormError] = useState('')

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

    setLoading(false)
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

      <form onSubmit={handleSubmit}>
        <TextField
          name="email"
          placeholder="Email"
          type="text"
          icon={<Email />}
          onInputChange={(value) => handleInput('email', value)}
          error={fieldErrors?.email}
        />

        <Button type="submit" fullWidth size="large" loading={loading}>
          Send reset email
        </Button>
      </form>
    </FormWrapper>
  )
}
export default FormRequestPassword
