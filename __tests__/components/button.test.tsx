import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import Button from '../../app/ui/core/button'

describe('Button', () => {
  it('Renders a button correctly', () => {
    const onClickMock = jest.fn()
    render(<Button label="Hello" type="submit" onClick={onClickMock} className="custom-class-11"/>)
    const button = screen.getByTestId('button')

    expect(button).toBeInTheDocument()
    expect(button).toHaveTextContent('Hello')
    expect(button).toHaveAttribute('type', 'submit')
    expect(button).toHaveClass('custom-class-11')

    fireEvent.click(button)
    expect(onClickMock).toHaveBeenCalledTimes(1)
  })
})