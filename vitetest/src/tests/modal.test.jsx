import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Modal from './Modal';

test('renders modal with correct props', () => {
  const onClose = jest.fn();
  const { getByText, queryByText } = render(
    <Modal show={true} onClose={onClose}>
      Modal content
    </Modal>
  );

  const modalContent = getByText('Modal content');
  expect(modalContent).toBeInTheDocument();

  const closeButton = getByText('Close');
  expect(closeButton).toBeInTheDocument();

  fireEvent.click(closeButton);
  expect(onClose).toHaveBeenCalledTimes(1);

  // Test closing the modal
  render(<Modal show={false} onClose={onClose}>Modal content</Modal>);
  expect(queryByText('Modal content')).toBeNull();
});
