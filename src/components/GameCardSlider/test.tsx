import 'match-media-mock'
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import GameCardSlider from '.'
import theme from 'styles/theme'
import cards from './mock'

describe('<GameSlider />', () => {
  it('should render with 4 active items', () => {
    const { container } = renderWithTheme(<GameCardSlider cards={cards} />)
    expect(container.querySelectorAll('.slick-active')).toHaveLength(4)
  })

  it('should render black arrows as default', () => {
    renderWithTheme(<GameCardSlider cards={cards} />)

    expect(screen.getByLabelText(/previous games/i)).toHaveStyle({
      color: theme.colors.black
    })
    expect(screen.getByLabelText(/next games/i)).toHaveStyle({
      color: theme.colors.black
    })
  })

  it('should render white arrows if color is passed', () => {
    renderWithTheme(<GameCardSlider cards={cards} color="white" />)

    expect(screen.getByLabelText(/previous games/i)).toHaveStyle({
      color: theme.colors.white
    })
    expect(screen.getByLabelText(/next games/i)).toHaveStyle({
      color: theme.colors.white
    })
  })
})
