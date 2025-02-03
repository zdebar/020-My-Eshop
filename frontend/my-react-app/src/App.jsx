import './styles.css';
import ProductCard from './components/ProductCard';
import { CartProvider } from './context/CartContext'; // Import from CartContext.jsx
import { useCart } from './context/useCart'; // Import from CartContext.jsx

function App() {
  const products = [
    { id: 1, name: 'Product 1', price: 299, image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Product 2', price: 499, image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Product 3', price: 799, image: 'https://via.placeholder.com/150' },
  ];

  return (
    <CartProvider>
      <div className="App">
        <h1>Welcome to My E-Shop</h1>
        <div className="product-list">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <Cart />
      </div>
    </CartProvider>
  );
}

function Cart() {
  const { cart, removeFromCart, clearCart } = useCart();

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id}>
              <p>
                {item.name} x {item.quantity} - {item.price * item.quantity} CZK
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </p>
            </div>
          ))}
          <button onClick={clearCart}>Clear Cart</button>
        </div>
      )}
    </div>
  );
}

export default App;


