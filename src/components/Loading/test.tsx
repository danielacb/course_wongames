import theme from 'styles/theme'
import { render, screen } from 'utils/test-utils'
import Loading from '.'

describe('<Container />', () => {
  it('should render the primary Loading as default', () => {
    const { container } = render(<Loading />)

    expect(container.firstChild?.firstChild).toHaveStyleRule(
      'border-top-color',
      theme.colors.primary
    )

    expect(container.firstChild?.firstChild).toHaveStyleRule(
      'border-right-color',
      theme.colors.primary
    )

    expect(screen.getByTestId('loading')).toBeInTheDocument()

    expect(container.firstChild?.firstChild).toMatchInlineSnapshot(`
      .c0 {
        display: inline-block;
        border-color: rgba(255,255,255,0.2);
        border-style: solid;
        border-radius: 50%;
        -webkit-animation: eoUyJr 1s infinite linear;
        animation: eoUyJr 1s infinite linear;
        width: 4rem;
        height: 4rem;
        border-width: 0.5rem;
        border-top-color: #F231A5;
        border-right-color: #F231A5;
      }

      <div
        class="c0"
      />
    `)
  })

  it('should render the secondary Loading', () => {
    const { container } = render(<Loading color="secondary" />)

    expect(container.firstChild?.firstChild).toHaveStyleRule(
      'border-top-color',
      theme.colors.secondary
    )

    expect(container.firstChild?.firstChild).toHaveStyleRule(
      'border-right-color',
      theme.colors.secondary
    )
  })

  it('should render the white Loading', () => {
    const { container } = render(<Loading color="white" />)

    expect(container.firstChild?.firstChild).toHaveStyleRule(
      'border-top-color',
      theme.colors.white
    )

    expect(container.firstChild?.firstChild).toHaveStyleRule(
      'border-right-color',
      theme.colors.white
    )
  })
})
