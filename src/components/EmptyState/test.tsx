import { render, screen } from 'utils/test-utils'
import EmptyState from '.'

const props = {
  title: 'This is my Title',
  description: 'This is my description'
}

describe('<EmptyState />', () => {
  it('should render the EmptyState', () => {
    const { container } = render(<EmptyState {...props} hasLink />)

    expect(container.parentElement).toMatchSnapshot()

    expect(
      screen.getByRole('img', {
        name: /a person sitting on a couch playing videogame/i
      })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /this is my title/i })
    ).toBeInTheDocument()
    expect(screen.getByText(/this is my description/i)).toBeInTheDocument()

    expect(
      screen.queryByRole('link', { name: /go back to store/i })
    ).not.toBeInTheDocument()

    expect(
      screen.getByRole('link', { name: /go back to the store/i })
    ).toHaveAttribute('href', '/')
  })

  it('should not render the link when hasLink is not passed', () => {
    render(<EmptyState {...props} />)

    expect(
      screen.queryByRole('link', { name: /go back to the store/i })
    ).not.toBeInTheDocument()
  })
})
