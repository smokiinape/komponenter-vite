import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from './Button';

test('renders button with correct props', () => {
  const onClick = jest.fn();
  const { getByText } = render(
    <Button color="red" disabled={false} onClick={onClick}>
      Click me
    </Button>
  );

  const button = getByText('Click me');
  expect(button).toBeInTheDocument();
  expect(button).toHaveStyle('background-color: red');
  expect(button).not.toBeDisabled();

  fireEvent.click(button);
  expect(onClick).toHaveBeenCalledTimes(1);
});
