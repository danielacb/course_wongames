import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import theme from 'styles/theme'

import Button from '.'

describe('<Button />', () => {
  it('should render the medium size by default', () => {
    renderWithTheme(<Button>Buy now!</Button>)

    expect(screen.getByRole('button', { name: /Buy now!/i })).toHaveStyle({
      height: '4rem',
      'font-size': theme.font.sizes.small,
      padding: `${theme.spacings.xxsmall} ${theme.spacings.medium}`
    })
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
})
