import bannersMock from 'components/BannerSlider/mock'
import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'
import 'match-media-mock'
import { render, screen } from 'utils/test-utils'
import Home from '.'

const props = {
  banners: bannersMock,
  newGames: [gamesMock[0]],
  newGamesTitle: 'New Games',
  mostPopularHighlight: highlightMock,
  mostPopularGamesTitle: 'Most Popular Games',
  mostPopularGames: [gamesMock[0]],
  upcomingGamesTitle: 'Upcoming Games',
  upcomingGames: [gamesMock[0]],
  upcomingHighlight: highlightMock,
  freeGamesTitle: 'Free Games',
  freeGames: [gamesMock[0]],
  freeGamesHighlight: highlightMock
}

jest.mock('templates/Base', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Base">{children}</div>
  }
}))

jest.mock('components/Showcase', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Showcase"></div>
    }
  }
})

jest.mock('components/BannerSlider', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Banner Slider"></div>
    }
  }
})

describe('<Home />', () => {
  it('should render banner and showcases', () => {
    render(<Home {...props} />)

    expect(screen.getByTestId('Mock Banner Slider')).toBeInTheDocument()
  })
})
