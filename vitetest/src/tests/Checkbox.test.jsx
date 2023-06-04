import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Checkbox from './Checkbox';

test('renders checkbox with correct props', () => {
  const onChange = jest.fn();
  const { getByLabelText } = render(
    <Checkbox label="Accept terms" checked={false} onChange={onChange} />
  );

  const checkbox = getByLabelText('Accept terms');
  expect(checkbox).toBeInTheDocument();
  expect(checkbox).not.toBeChecked();

  fireEvent.click(checkbox);
  expect(onChange).toHaveBeenCalledTimes(1);
  expect(onChange).toHaveBeenCalledWith(expect.any(Object));

  expect(checkbox).toBeChecked();
});
