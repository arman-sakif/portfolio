import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the portfolio owner name', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /arman sakif/i })).toBeInTheDocument();
});

test('renders the main sections', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /expertise/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /career history/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /projects/i })).toBeInTheDocument();
});
