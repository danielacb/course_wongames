import { fireEvent, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import theme from 'styles/theme'

import GameCard from '.'

const props = {
  slug: 'population-zero',
  title: 'Population Zero',
  developer: 'Rockstar Games',
  img: 'https://source.unsplash.com/user/willianjusten/300x140',
  price: 235
}

describe('<GameCard />', () => {
  it('should render the GameCard', () => {
    const { container } = renderWithTheme(<GameCard {...props} />)

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
    renderWithTheme(<GameCard {...props} />)

    const price = screen.getByText('$235.00')

    expect(price).not.toHaveStyleRule('text-decoration', 'line-through')
    expect(price).toHaveStyle({ backgroundColor: theme.colors.secondary })
  })

  it('should change style when there is a promotional price', () => {
    renderWithTheme(<GameCard {...props} promotionalPrice={200} />)

    expect(screen.getByText('$235.00')).toHaveStyle({
      textDecoration: 'line-through'
    })

    expect(screen.getByText('$200.00')).not.toHaveStyle({
      textDecoration: 'line-through'
    })
  })

  it('should render a solid Favorite icon when favorite is true', () => {
    renderWithTheme(<GameCard {...props} favorite />)

    expect(screen.getByLabelText(/remove from wishlist/i)).toBeInTheDocument()
  })

  it('should call onFav method when favorite icon is clicked', () => {
    const onFav = jest.fn()
    renderWithTheme(<GameCard {...props} onFav={onFav} />)

    fireEvent.click(screen.getAllByRole('button')[0])

    expect(onFav).toBeCalled()
  })

  it('should render a Ribbon', () => {
    renderWithTheme(
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
