import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Input from './Input';

test('renders input with correct props', () => {
  const onChange = jest.fn();
  const { getByPlaceholderText } = render(
    <Input type="text" placeholder="Enter your name" value="" onChange={onChange} />
  );

  const inputElement = getByPlaceholderText('Enter your name');
  expect(inputElement).toBeInTheDocument();
  expect(inputElement).toHaveAttribute('type', 'text');
  expect(inputElement).toHaveValue('');

  fireEvent.change(inputElement, { target: { value: 'John Doe' } });
  expect(onChange).toHaveBeenCalledTimes(1);
  expect(onChange).toHaveBeenCalledWith(expect.any(Object));

  expect(inputElement).toHaveValue('John Doe');
});
