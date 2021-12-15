import React from 'react'
import { render, screen } from '@testing-library/react'
import { NumberInput } from '../shared/components/NumberInput'

describe('NumberInput', () => {
  it('emits an incremented number value after clicking the plus button', () => {
    const clickHandler = jest.fn();
    render(<NumberInput number={1} onChange={clickHandler} />);

    const addButton = screen.getByTestId('add');

    addButton.click();

    expect(clickHandler).toHaveBeenCalledWith(2);
  })

  it('emits a decremented number value after clicking the minus button', () => {
    const clickHandler = jest.fn();
    render(<NumberInput number={2} onChange={clickHandler} />);

    const subtractButton = screen.getByTestId('subtract');

    subtractButton.click();

    expect(clickHandler).toHaveBeenCalledWith(1);
  })

  it('does not emit a decremented number value below 1', () => {
    const clickHandler = jest.fn();
    render(<NumberInput number={1} onChange={clickHandler} />);

    const subtractButton = screen.getByTestId('subtract');

    subtractButton.click();

    expect(clickHandler).not.toHaveBeenCalled();
  })

  it('does not emit a decremented number value above 25', () => {
    const clickHandler = jest.fn();
    render(<NumberInput number={25} onChange={clickHandler} />);

    const addButton = screen.getByTestId('add');

    addButton.click();

    expect(clickHandler).not.toHaveBeenCalled();
  })
})
