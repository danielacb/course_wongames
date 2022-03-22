import { renderWithTheme } from 'utils/tests/helpers'
import theme from 'styles/theme'

import Loading from '.'

describe('<Container />', () => {
  it('should render the primary Loading as default', () => {
    const { container } = renderWithTheme(<Loading />)

    expect(container.firstChild?.firstChild).toHaveStyleRule(
      'border-top-color',
      theme.colors.primary
    )

    expect(container.firstChild?.firstChild).toHaveStyleRule(
      'border-right-color',
      theme.colors.primary
    )

    expect(container.firstChild?.firstChild).toMatchInlineSnapshot(`
      .c0 {
        display: inline-block;
        border-color: rgba(255,255,255,0.2);
        border-style: solid;
        border-width: 0.5rem;
        border-radius: 50%;
        width: 4rem;
        height: 4rem;
        -webkit-animation: eoUyJr 1s infinite linear;
        animation: eoUyJr 1s infinite linear;
        border-top-color: #F231A5;
        border-right-color: #F231A5;
      }

      <div
        class="c0"
      />
    `)
  })

  it('should render the secondary Loading', () => {
    const { container } = renderWithTheme(<Loading color="secondary" />)

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
    const { container } = renderWithTheme(<Loading color="white" />)

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
