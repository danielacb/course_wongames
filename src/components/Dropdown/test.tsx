import userEvent from '@testing-library/user-event'
import { render, screen } from 'utils/test-utils'
import Dropdown from '.'

describe('<Dropdown />', () => {
  beforeEach(() => {
    const trigger = <h1 aria-label="toogle dropdown">Click here</h1>

    render(
      <Dropdown trigger={trigger}>
        <span>content</span>
      </Dropdown>
    )
  })

  it('should render trigger', () => {
    expect(screen.getByLabelText(/toogle dropdown/)).toBeInTheDocument()
  })

  it('should handle open/close dropdown', () => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const content = screen.getByText(/content/).parentElement!

    expect(content).toHaveStyle({ opacity: 0 })
    expect(content.getAttribute('aria-hidden')).toBe('true')

    userEvent.click(screen.getByLabelText(/toogle dropdown/))

    expect(content).toHaveStyle({ opacity: 1 })
    expect(content.getAttribute('aria-hidden')).toBe('false')
  })

  it('should handle open/close dropdown when clicking on overlay', () => {
    const content = screen.getByText(/content/).parentElement
    const overlay = content?.nextElementSibling

    userEvent.click(screen.getByLabelText(/toogle dropdown/))

    expect(overlay).toHaveStyle({ opacity: 1 })
    overlay && expect(overlay.getAttribute('aria-hidden')).toBe('false')

    overlay && userEvent.click(overlay)

    expect(overlay).toHaveStyle({ opacity: 0 })
    overlay && expect(overlay.getAttribute('aria-hidden')).toBe('true')
  })
})
