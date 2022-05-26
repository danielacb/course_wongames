import 'match-media-mock'
import theme from 'styles/theme'
import { render, screen } from 'utils/test-utils'
import GameCardSlider from '.'
import cards from './mock'

describe('<GameSlider />', () => {
  it('should render with 4 active items', () => {
    const { container } = render(<GameCardSlider cards={cards} />)
    expect(container.querySelectorAll('.slick-active')).toHaveLength(4)
  })

  it('should render black arrows as default', () => {
    render(<GameCardSlider cards={cards} />)

    expect(screen.getByLabelText(/previous games/i)).toHaveStyle({
      color: theme.colors.black
    })
    expect(screen.getByLabelText(/next games/i)).toHaveStyle({
      color: theme.colors.black
    })
  })

  it('should render white arrows if color is passed', () => {
    render(<GameCardSlider cards={cards} color="white" />)

    expect(screen.getByLabelText(/previous games/i)).toHaveStyle({
      color: theme.colors.white
    })
    expect(screen.getByLabelText(/next games/i)).toHaveStyle({
      color: theme.colors.white
    })
  })
})
