import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductList from '../Components/ProductList';

const mockProducts = [
  { id: 1, name: 'Milk', category: 'Dairy', price: 3.99 },
  { id: 2, name: 'Bread', category: 'Bakery', price: 2.49 },
  { id: 3, name: 'Eggs', category: 'Dairy', price: 4.29 },
];

describe('ProductList Component', () => {
  test('shows all products when category is "All"', () => {
    const mockAddToCart = vi.fn();
    render(
      <ProductList 
        products={mockProducts} 
        selectedCategory="All" 
        addToCart={mockAddToCart}
      />
    );
    
    expect(screen.getByText('Milk')).toBeInTheDocument();
    expect(screen.getByText('Bread')).toBeInTheDocument();
    expect(screen.getByText('Eggs')).toBeInTheDocument();
  });

  test('filters products by Dairy category', () => {
    const mockAddToCart = vi.fn();
    render(
      <ProductList 
        products={mockProducts} 
        selectedCategory="Dairy" 
        addToCart={mockAddToCart}
      />
    );
    
    expect(screen.getByText('Milk')).toBeInTheDocument();
    expect(screen.getByText('Eggs')).toBeInTheDocument();
    expect(screen.queryByText('Bread')).not.toBeInTheDocument();
  });

  test('renders message when no products match filter', () => {
    const mockAddToCart = vi.fn();
    render(
      <ProductList 
        products={mockProducts} 
        selectedCategory="Meat" 
        addToCart={mockAddToCart}
      />
    );
    
    expect(screen.getByText(/no products found/i)).toBeInTheDocument();
  });
});