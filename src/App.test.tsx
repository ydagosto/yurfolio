import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders resume experience section', () => {
  render(<App />);
  const experienceHeading = screen.getByText(/experience/i);
  expect(experienceHeading).toBeInTheDocument();
});
