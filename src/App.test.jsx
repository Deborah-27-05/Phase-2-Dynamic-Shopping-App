import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  test('renders the shopping app title', () => {
    render(<App />);
    const titleElement = screen.getByText(/shopping app/i);
    expect(titleElement).toBeInTheDocument();
  });

  test('renders dark mode toggle button', () => {
    render(<App />);
    const button = screen.getByRole('button', { name: /dark mode|light mode/i });
    expect(button).toBeInTheDocument();
  });
});