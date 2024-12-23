import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the app title', () => {
  render(<App />);
  expect(
    screen.getByText(/React Project Setup Inside Forked Repo/i)
  ).toBeInTheDocument();
});
