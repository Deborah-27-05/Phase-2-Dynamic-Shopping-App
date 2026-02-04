const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:shadow-md transition">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-bold text-gray-800 dark:text-white">{product.name}</h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm">{product.category}</p>
          <p className="text-lg font-bold text-blue-600 dark:text-blue-400 mt-2">
            ${product.price.toFixed(2)}
          </p>
        </div>
        <button
          onClick={() => addToCart(product)}
          className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
