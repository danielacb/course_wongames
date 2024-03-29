import 'session.mock'
import theme from 'styles/theme'
import { render, screen } from 'utils/test-utils'
import GameCard from '.'

const props = {
  id: '1',
  slug: 'population-zero',
  title: 'Population Zero',
  developer: 'Rockstar Games',
  img: 'https://source.unsplash.com/user/willianjusten/300x140',
  price: 235
}

describe('<GameCard />', () => {
  it('should render the GameCard', () => {
    const { container } = render(<GameCard {...props} />)

    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: props.developer })
    ).toBeInTheDocument()

    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      props.img
    )

    expect(screen.getByLabelText(/add to wishlist/i)).toBeInTheDocument()

    expect(screen.getByRole('link', { name: props.title })).toHaveAttribute(
      'href',
      `/game/${props.slug}`
    )

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the price as a label', () => {
    render(<GameCard {...props} />)

    const price = screen.getByText('$235.00')

    expect(price).not.toHaveStyleRule('text-decoration', 'line-through')
    expect(price).toHaveStyle({ backgroundColor: theme.colors.secondary })
  })

  it('should change style when there is a promotional price', () => {
    render(<GameCard {...props} promotionalPrice={200} />)

    expect(screen.getByText('$235.00')).toHaveStyle({
      textDecoration: 'line-through'
    })

    expect(screen.getByText('$200.00')).not.toHaveStyle({
      textDecoration: 'line-through'
    })
  })

  it('should render a Ribbon', () => {
    render(
      <GameCard
        {...props}
        ribbon="Best Seller"
        ribbonSize="small"
        ribbonColor="secondary"
      />
    )

    const ribbon = screen.getByText(/best seller/i)

    expect(ribbon).toBeInTheDocument()
    expect(ribbon).toHaveStyle({
      backgroundColor: theme.colors.secondary,
      height: '2.6rem',
      fontSize: '1.2rem'
    })
  })
})
