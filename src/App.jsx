import React from 'react'
import { useState } from 'react';
import DarkModeToggle from './Components/DarkModeToggle';
import ProductList from './Components/ProductList';
import Cart from './Components/Cart';

const initialProducts = [
  { id: 1, name: 'Milk', category: 'Dairy', price: 3.99, inCart: false },
  { id: 2, name: 'Bread', category: 'Bakery', price: 2.49, inCart: false },
  { id: 3, name: 'Eggs', category: 'Dairy', price: 4.29, inCart: false },
  { id: 4, name: 'Apples', category: 'Produce', price: 1.99, inCart: false },
  { id: 5, name: 'Chicken', category: 'Meat', price: 8.99, inCart: false },
  { id: 6, name: 'Carrots', category: 'Produce', price: 2.49, inCart: false },
  { id: 7, name: 'Cheese', category: 'Dairy', price: 5.49, inCart: false },
  { id: 8, name: 'Orange Juice', category: 'Beverages', price: 3.79, inCart: false },
];

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const addToCart = (product) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    
    if (existingItem) {
      setCartItems(cartItems.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };

  const categories = ['All', ...new Set(initialProducts.map(product => product.category))];

  return (
    <div className={darkMode ? 'dark bg-gray-900 min-h-screen' : 'bg-gray-50 min-h-screen'}>
     
      <header className="bg-white dark:bg-gray-800 shadow p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
            🛒 Shopping App
          </h1>
          <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        </div>
      </header>

     
      <main className="max-w-7xl mx-auto p-4">
       
        <div className="mb-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-2 md:mb-0">
                Filter Products
              </h2>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full md:w-64 p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
              <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                Products
              </h2>
              <ProductList 
                products={initialProducts}
                selectedCategory={selectedCategory}
                addToCart={addToCart}
              />
            </div>
          </div>

         
          <div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
              <Cart 
                cartItems={cartItems}
                removeFromCart={removeFromCart}
              />
            </div>
          </div>
        </div>
      </main>

     
      <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 p-4">
        <div className="max-w-7xl mx-auto text-center text-gray-600 dark:text-gray-400">
          <p>Cart: {cartItems.length} items | Filter: {selectedCategory}</p>
        </div>
      </footer>
    </div>
  );
}

export default App;