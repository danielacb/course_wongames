import userEvent from '@testing-library/user-event'
import theme from 'styles/theme'
import { render, screen, waitFor } from 'utils/test-utils'
import Checkbox from '.'

describe('<Checkbox />', () => {
  it('should render with a label', () => {
    const { container } = render(<Checkbox label="checkbox label" id="check" />)

    expect(screen.getByRole('checkbox')).toBeInTheDocument()
    expect(screen.getByText(/checkbox label/i)).toBeInTheDocument()
    expect(screen.getByText(/checkbox label/i)).toHaveAttribute('for', 'check')
    expect(container.firstChild).toMatchSnapshot()
  })
  it('should not render a label when label prop is not passed', () => {
    render(<Checkbox />)

    expect(screen.queryByLabelText('Checkbox')).not.toBeInTheDocument()
  })

  it('should render with a black label', () => {
    render(<Checkbox label="checkbox label" id="check" labelColor="black" />)

    expect(screen.getByText(/checkbox label/i)).toHaveStyle({
      color: theme.colors.black
    })
  })

  it('should render with a white label', () => {
    render(<Checkbox label="checkbox label" id="check" labelColor="white" />)

    expect(screen.getByText(/checkbox label/i)).toHaveStyle({
      color: theme.colors.white
    })
  })

  it('should dispatch onCheck when status changes', async () => {
    const onCheck = jest.fn()
    render(<Checkbox label="checkbox label" id="check" onCheck={onCheck} />)

    expect(onCheck).not.toHaveBeenCalled()

    userEvent.click(screen.getByRole('checkbox'))
    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1)
    })

    expect(onCheck).toHaveBeenCalledWith(true)
  })

  it('should dispatch onCheck when status changes and isChecked is passed', async () => {
    const onCheck = jest.fn()
    render(
      <Checkbox label="checkbox label" id="check" onCheck={onCheck} isChecked />
    )

    expect(onCheck).not.toHaveBeenCalled()
    userEvent.click(screen.getByRole('checkbox'))

    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1)
    })

    expect(onCheck).toHaveBeenCalledWith(false)
  })

  it('should be accessible', () => {
    render(<Checkbox label="checkbox label" id="check" />)

    expect(document.body).toHaveFocus()

    userEvent.tab()
    expect(screen.getByRole('checkbox')).toHaveFocus()
  })
})
