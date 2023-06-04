import React from 'react';
import { render } from '@testing-library/react';
import Navbar from './Navbar';

test('renders navbar with correct props', () => {
  const icon = <i className="fa fa-bars" />;
  const links = ['Home', 'About', 'Contact'];
  const { getByText, getByTestId } = render(
    <Navbar icon={icon} links={links} />
  );

  const navbarIcon = getByTestId('navbar-icon');
  expect(navbarIcon).toContainHTML('<i class="fa fa-bars"></i>');

  const navbarLinks = getByTestId('navbar-links');
  links.forEach(link => {
    const linkElement = getByText(link);
    expect(linkElement).toBeInTheDocument();
  });
});
