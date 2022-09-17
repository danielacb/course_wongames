import UserDropdown from '.'
import userEvent from '@testing-library/user-event'
import { render, screen } from 'utils/test-utils'

describe('<UserDropdown />', () => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const useRouter = jest.spyOn(require('next/router'), 'useRouter')

  useRouter.mockImplementation(() => ({
    query: {}
  }))

  it('should render the username', () => {
    render(<UserDropdown username="Willian" />)

    expect(screen.getByText(/willian/i)).toBeInTheDocument()
  })

  it('should render the menu', () => {
    render(<UserDropdown username="Willian" />)

    userEvent.click(screen.getByText(/willian/i))

    expect(
      screen.getByRole('link', { name: /my profile/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('link', { name: /wishlist/i })).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /sign out/i })
    ).toBeInTheDocument()
  })
})
