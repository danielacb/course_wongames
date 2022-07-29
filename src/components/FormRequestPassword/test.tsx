import userEvent from '@testing-library/user-event'
import 'server.mock'
import { render, screen } from 'utils/test-utils'

import FormRequestPassword from '.'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter')
let query = {}

useRouter.mockImplementation(() => ({
  query
}))

describe('<FormRequestPassword />', () => {
  it('should render the form', () => {
    render(<FormRequestPassword />)

    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /send reset email/i })
    ).toBeInTheDocument()
  })

  it('should validate the email', async () => {
    render(<FormRequestPassword />)

    await userEvent.type(
      screen.getByPlaceholderText(/email/i),
      'valid@email.com'
    )

    userEvent.click(screen.getByRole('button', { name: /send reset email/i }))

    expect(await screen.findByText(/e-mail sent/i)).toBeInTheDocument()
    expect(
      await screen.findByText(
        /check your inbox for instructions to reset your password/i
      )
    ).toBeInTheDocument()
  })

  it('should show an invalid email error message', async () => {
    render(<FormRequestPassword />)

    await userEvent.type(screen.getByPlaceholderText(/email/i), 'invalid')

    userEvent.click(screen.getByRole('button', { name: /send reset email/i }))

    expect(
      await screen.findByText(/must be a valid email/i)
    ).toBeInTheDocument()
  })

  it('should show an inexistent email error', async () => {
    render(<FormRequestPassword />)

    await userEvent.type(
      screen.getByPlaceholderText(/email/i),
      'false@email.com'
    )

    userEvent.click(screen.getByRole('button', { name: /send reset email/i }))

    expect(
      await screen.findByText(/This email does not exist/i)
    ).toBeInTheDocument()
  })

  it('should autofill if it comes via logged user', () => {
    query = { email: 'valid@email.com' }
    render(<FormRequestPassword />)

    expect(screen.getByPlaceholderText(/email/i)).toHaveValue('valid@email.com')
  })
})
