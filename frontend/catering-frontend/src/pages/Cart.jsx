import { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { placeOrder } from '../services/api';

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);
  const [error, setError] = useState('');

  const handlePlaceOrder = async () => {
    try {
      const orderItems = cart.map((item) => ({ menuItem: { id: item.id }, quantity: item.quantity }));
      await placeOrder(orderItems);
      clearCart();
      alert('Order placed successfully!');
    } catch (error) {
      setError('Error placing order. Please try again.');
    }
  };

  return (
    <div>
      <h2>Cart</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <ul className="list-group">
        {cart.map((item) => (
          <li key={item.id} className="list-group-item d-flex align-items-center">
            {item.image && (
              <img
                src={`data:image/jpeg;base64,${item.image}`}
                alt={item.name}
                style={{ width: '50px', height: '50px', objectFit: 'cover', marginRight: '10px' }}
              />
            )}
            <div className="flex-grow-1">
              {item.name} - ${item.price} x {item.quantity}
            </div>
            <button className="btn btn-danger btn-sm" onClick={() => removeFromCart(item.id)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
      {cart.length > 0 && (
        <button className="btn btn-primary mt-3" onClick={handlePlaceOrder}>
          Place Order
        </button>
      )}
    </div>
  );
};

export default Cart;