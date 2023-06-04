import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Lightbox from './Lightbox';

test('renders lightbox with correct props', () => {
  const images = ['image1.jpg', 'image2.jpg', 'image3.jpg'];
  const onClose = jest.fn();
  const { getByAltText, getByText, queryByAltText } = render(
    <Lightbox images={images} size="medium" show={true} onClose={onClose} />
  );

  images.forEach((image, index) => {
    const imageElement = getByAltText(`Image ${index + 1}`);
    expect(imageElement).toHaveAttribute('src', image);
  });

  const closeButton = getByText('Close');
  expect(closeButton).toBeInTheDocument();

  fireEvent.click(closeButton);
  expect(onClose).toHaveBeenCalledTimes(1);

  
  render(<Lightbox images={images} size="medium" show={false} onClose={onClose} />);
  images.forEach((image, index) => {
    const imageElement = queryByAltText(`Image ${index + 1}`);
    expect(imageElement).toBeNull();
  });
});
