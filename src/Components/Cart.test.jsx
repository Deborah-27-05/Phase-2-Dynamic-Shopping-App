import React from 'react';
import { render, screen } from '@testing-library/react';
import Cart from '../Components/Cart';

const mockCartItems = [
  { id: 1, name: 'Milk', price: 3.99, quantity: 2 },
  { id: 2, name: 'Bread', price: 2.49, quantity: 1 },
];

describe('Cart Component', () => {
  test('shows empty message when cart is empty', () => {
    const mockRemoveFromCart = vi.fn();
    render(<Cart cartItems={[]} removeFromCart={mockRemoveFromCart} />);
    
    expect(screen.getByText(/your cart is empty/i)).toBeInTheDocument();
  });

  test('displays cart items with correct details', () => {
    const mockRemoveFromCart = vi.fn();
    render(<Cart cartItems={mockCartItems} removeFromCart={mockRemoveFromCart} />);
    
    expect(screen.getByText('Milk')).toBeInTheDocument();
    expect(screen.getByText('Bread')).toBeInTheDocument();
    expect(screen.getByText('$3.99 × 2')).toBeInTheDocument();
    expect(screen.getByText('$2.49 × 1')).toBeInTheDocument();
  });

  test('shows "is in your cart" message for each item', () => {
    const mockRemoveFromCart = vi.fn();
    render(<Cart cartItems={mockCartItems} removeFromCart={mockRemoveFromCart} />);
    
    expect(screen.getByText(/milk is in your cart/i)).toBeInTheDocument();
    expect(screen.getByText(/bread is in your cart/i)).toBeInTheDocument();
  });

  test('calculates and displays total price correctly', () => {
    const mockRemoveFromCart = vi.fn();
    render(<Cart cartItems={mockCartItems} removeFromCart={mockRemoveFromCart} />);
    
    // Total: (3.99 * 2) + (2.49 * 1) = 7.98 + 2.49 = 10.47
    expect(screen.getByText(/total:/i)).toBeInTheDocument();
    expect(screen.getByText('$10.47')).toBeInTheDocument();
  });
});