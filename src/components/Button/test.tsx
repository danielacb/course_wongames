import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'
import theme from 'styles/theme'
import { render, screen } from 'utils/test-utils'
import Button from '.'

describe('<Button />', () => {
  it('should render the medium size by default', () => {
    const { container } = render(<Button>Buy now!</Button>)

    expect(screen.getByRole('button', { name: /Buy now!/i })).toHaveStyle({
      height: '4rem',
      'font-size': theme.font.sizes.small,
      padding: `${theme.spacings.xxsmall} ${theme.spacings.medium}`
    })

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the small size', () => {
    render(<Button size="small">Buy now!</Button>)

    expect(screen.getByRole('button', { name: /Buy now!/i })).toHaveStyle({
      height: '3rem',
      'font-size': theme.font.sizes.xsmall
    })
  })

  it('should render the large size', () => {
    render(<Button size="large">Buy now!</Button>)

    expect(screen.getByRole('button', { name: /Buy now!/i })).toHaveStyle({
      height: '5rem',
      'font-size': theme.font.sizes.medium,
      padding: `${theme.spacings.xxsmall} ${theme.spacings.xlarge}`
    })
  })

  it('should render a fullWidth version', () => {
    render(<Button fullWidth>Buy now!</Button>)

    expect(screen.getByRole('button', { name: /Buy now!/i })).toHaveStyle({
      width: '100%'
    })
  })

  it('should render an icon version', () => {
    render(
      <Button icon={<AddShoppingCart data-testid="icon" />}>Buy now!</Button>
    )

    expect(screen.getByText(/Buy now!/i)).toBeInTheDocument()
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('should render a minimal version', () => {
    render(
      <Button icon={<AddShoppingCart data-testid="icon" />} minimal>
        Buy now!
      </Button>
    )

    expect(screen.getByRole('button', { name: /buy now/i })).toHaveStyle({
      background: 'none',
      color: theme.colors.primary
    })

    expect(screen.getByRole('button', { name: /buy now/i })).toHaveStyleRule(
      'background',
      'none',
      {
        modifier: ':hover'
      }
    )
  })

  it('should render Button as a Link', () => {
    render(
      <Button as="a" href="/link">
        Buy now
      </Button>
    )

    expect(screen.getByRole('link', { name: /buy now/i })).toHaveAttribute(
      'href',
      '/link'
    )
  })

  it('should render a disabled Button', () => {
    render(<Button disabled>Buy now</Button>)

    expect(screen.getByRole('button', { name: /buy now/i })).toHaveStyleRule(
      'cursor',
      'not-allowed',
      {
        modifier: ':disabled'
      }
    )
  })
})
