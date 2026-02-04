import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ products, selectedCategory, addToCart }) => {
  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

if (filteredProducts.length === 0) {
    return <p className="no-products">No products found in this category.</p>;
  }

  return (
    <div className="space-y-4">
      {filteredProducts.map(product => (
        <ProductCard
          key={product.id}
          product={product}
          addToCart={addToCart}
        />
      ))}
    </div>
  );
};

export default ProductList;