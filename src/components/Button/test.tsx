import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'
import theme from 'styles/theme'

import Button from '.'

describe('<Button />', () => {
  it('should render the medium size by default', () => {
    const { container } = renderWithTheme(<Button>Buy now!</Button>)

    expect(screen.getByRole('button', { name: /Buy now!/i })).toHaveStyle({
      height: '4rem',
      'font-size': theme.font.sizes.small,
      padding: `${theme.spacings.xxsmall} ${theme.spacings.medium}`
    })

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the small size', () => {
    renderWithTheme(<Button size="small">Buy now!</Button>)

    expect(screen.getByRole('button', { name: /Buy now!/i })).toHaveStyle({
      height: '3rem',
      'font-size': theme.font.sizes.xsmall
    })
  })

  it('should render the large size', () => {
    renderWithTheme(<Button size="large">Buy now!</Button>)

    expect(screen.getByRole('button', { name: /Buy now!/i })).toHaveStyle({
      height: '5rem',
      'font-size': theme.font.sizes.medium,
      padding: `${theme.spacings.xxsmall} ${theme.spacings.xlarge}`
    })
  })

  it('should render a fullWidth version', () => {
    renderWithTheme(<Button fullWidth>Buy now!</Button>)

    expect(screen.getByRole('button', { name: /Buy now!/i })).toHaveStyle({
      width: '100%'
    })
  })

  it('should render an icon version', () => {
    renderWithTheme(
      <Button icon={<AddShoppingCart data-testid="icon" />}>Buy now!</Button>
    )

    expect(screen.getByText(/Buy now!/i)).toBeInTheDocument()
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('should render Button as a Link', () => {
    renderWithTheme(
      <Button as="a" href="/link">
        Buy now
      </Button>
    )

    expect(screen.getByRole('link', { name: /buy now/i })).toHaveAttribute(
      'href',
      '/link'
    )
  })
})
