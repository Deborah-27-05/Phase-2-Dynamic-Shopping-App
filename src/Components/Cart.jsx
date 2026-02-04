const Cart = ({ cartItems, removeFromCart }) => {
  const totalPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

  if (cartItems.length === 0) {
    return (
      <div>
        <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Cart</h2>
        <p className="text-gray-600 dark:text-gray-400">Your cart is empty</p>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Cart ({cartItems.length})</h2>
      
      <div className="space-y-3 mb-4">
        {cartItems.map(item => (
          <div key={item.id} className="border border-gray-200 dark:border-gray-700 rounded p-3">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium text-gray-800 dark:text-white">{item.name}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  ${item.price.toFixed(2)} × {item.quantity}
                </p>
                <p className="text-sm text-green-600 dark:text-green-400 font-medium">
                  ✅ {item.name} is in your cart.
                </p>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
        <div className="flex justify-between font-bold text-lg">
          <span>Total:</span>
          <span>${totalPrice.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default Cart;