import 'match-media-mock'
import { render, screen } from 'utils/test-utils'
import BannerSlider from '.'

const banners = [
  {
    img: 'https://source.unsplash.com/user/willianjusten/1042x580',
    title: 'Defy death 1',
    subtitle: '<p>Play the new <strong>CrashLands</strong> season',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death',
    ribbon: 'Bestselling'
  },
  {
    img: 'https://source.unsplash.com/user/willianjusten/1042x582',
    title: 'Defy death 2',
    subtitle: '<p>Play the new <strong>CrashLands</strong> season',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death'
  }
]

describe('<BannerSlider />', () => {
  it('should render a vertical slider', () => {
    const { container } = render(<BannerSlider banners={banners} />)

    expect(container.querySelector('.slick-vertical')).toBeInTheDocument()
  })

  it('should render one active item at a time', () => {
    const { container } = render(<BannerSlider banners={banners} />)

    expect(container.querySelectorAll('.slick-slide')).toHaveLength(2)
    expect(container.querySelectorAll('li.slick-active')).toHaveLength(1)

    expect(
      screen.getByRole('heading', { name: /defy death 1/i, hidden: false })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /defy death 2/i, hidden: true })
    ).toBeInTheDocument()
  })

  it('should render the slider dots', () => {
    const { container } = render(<BannerSlider banners={banners} />)

    expect(container.querySelector('.slick-dots')).toBeInTheDocument()
  })
})
