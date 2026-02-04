import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import DarkModeToggle from '../Components/DarkModeToggle';

describe('DarkModeToggle Component', () => {
  test('shows "Dark Mode" button when darkMode is false', () => {
    const mockToggle = vi.fn();
    render(<DarkModeToggle darkMode={false} toggleDarkMode={mockToggle} />);
    
    expect(screen.getByRole('button')).toHaveTextContent(/dark mode/i);
  });

  test('shows "Light Mode" button when darkMode is true', () => {
    const mockToggle = vi.fn();
    render(<DarkModeToggle darkMode={true} toggleDarkMode={mockToggle} />);
    
    expect(screen.getByRole('button')).toHaveTextContent(/light mode/i);
  });

  test('calls toggleDarkMode when clicked', () => {
    const mockToggle = vi.fn();
    render(<DarkModeToggle darkMode={false} toggleDarkMode={mockToggle} />);
    
    fireEvent.click(screen.getByRole('button'));
    expect(mockToggle).toHaveBeenCalledTimes(1);
  });
});