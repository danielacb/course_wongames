import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import theme from 'styles/theme'

import Checkbox from '.'

describe('<Checkbox />', () => {
  it('should render with a label', () => {
    renderWithTheme(<Checkbox label="checkbox label" id="check" />)

    expect(screen.getByRole('checkbox')).toBeInTheDocument()
    expect(screen.getByText(/checkbox label/i)).toBeInTheDocument()
    expect(screen.getByText(/checkbox label/i)).toHaveAttribute('for', 'check')
  })
  it('should not render a label when label prop is not passed', () => {
    renderWithTheme(<Checkbox />)

    expect(screen.queryByLabelText('Checkbox')).not.toBeInTheDocument()
  })

  it('should render with a black label', () => {
    renderWithTheme(
      <Checkbox label="checkbox label" id="check" labelColor="black" />
    )

    expect(screen.getByText(/checkbox label/i)).toHaveStyle({
      color: theme.colors.black
    })
  })

  it('should render with a white label', () => {
    renderWithTheme(
      <Checkbox label="checkbox label" id="check" labelColor="white" />
    )

    expect(screen.getByText(/checkbox label/i)).toHaveStyle({
      color: theme.colors.white
    })
  })
})
