import { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { placeOrder } from '../services/api';

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);
  const [error, setError] = useState('');

  const handlePlaceOrder = async () => {
    try {
      const orderItems = cart.map((item) => ({
        menuItem: { id: item.id },
        quantity: item.quantity,
      }));
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
      {cart.map((item) => (
        <div key={item.id}>
          {item.name} - {item.quantity}
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}
      {cart.length > 0 && <button onClick={handlePlaceOrder}>Place Order</button>}
    </div>
  );
};

export default Cart;
