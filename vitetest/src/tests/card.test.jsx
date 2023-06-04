import React from 'react';
import { render } from '@testing-library/react';
import Card from './Card';

test('renders card with correct props', () => {
  const title = 'Card Title';
  const description = 'Card description';
  const image = 'image.jpg';
  const { getByText, getByAltText } = render(
    <Card title={title} description={description} image={image} />
  );

  const titleElement = getByText('Card Title');
  expect(titleElement).toBeInTheDocument();

  const descriptionElement = getByText('Card description');
  expect(descriptionElement).toBeInTheDocument();

  const imageElement = getByAltText('Card Title');
  expect(imageElement).toHaveAttribute('src', 'image.jpg');
});
