// import { useContext, useState } from 'react';
// import { CartContext } from '../context/CartContext';
// import { placeOrder } from '../services/api';

// const Cart = () => {
//   const { cart, removeFromCart, clearCart } = useContext(CartContext);
//   const [error, setError] = useState('');

//   const handlePlaceOrder = async () => {
//     try {
//       const orderItems = cart.map((item) => ({
//         menuItem: { id: item.id },
//         quantity: item.quantity,
//       }));
//       console.log("🛒 Sending order payload:", orderItems);
//       await placeOrder(orderItems);
//       clearCart();
//       alert('Order placed successfully!');
//     } catch (error) {
//       setError('Error placing order. Please try again.');
//     }
//   };

//   return (
//     <div>
//       <h2>Cart</h2>
//       {cart.map((item) => (
//         <div key={item.id}>
//           {item.name} - {item.quantity}
//           <button onClick={() => removeFromCart(item.id)}>Remove</button>
//         </div>
//       ))}
//       {cart.length > 0 && <button onClick={handlePlaceOrder}>Place Order</button>}
//     </div>
//   );
// };



// export default Cart;


import { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { placeOrder } from '../services/api';

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);
  const [error, setError] = useState('');

  const handlePlaceOrder = async () => {
    try {
      const orderItems = cartItems.map((item) => ({
        menuItem: { id: item.id },
        quantity: item.quantity,
      }));
      console.log("🛒 Sending order payload:", orderItems);
      await placeOrder(orderItems);
      clearCart();
      alert('Order placed successfully!');
    } catch (error) {
      setError('Error placing order. Please try again.');
    }
  };

  return (
    <div className="cart-container">
      {/* Internal CSS */}
      <style>{`
        .cart-container {
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
          background: #fff;
          border-radius: 12px;
          box-shadow: 0 6px 15px rgba(0,0,0,0.1);
        }
        .cart-title {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 20px;
          text-align: center;
          color: #333;
        }
        .cart-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 16px;
          margin-bottom: 12px;
          border-radius: 8px;
          background: linear-gradient(135deg, #f9f9f9, #f1f1f1);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .cart-item:hover {
          transform: translateY(-3px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        }
        .cart-item-name {
          font-size: 1.1rem;
          font-weight: 500;
          color: #444;
        }
        .cart-item-qty {
          font-size: 1rem;
          color: #777;
          margin-left: 8px;
        }
        .remove-btn {
          background: #ff6b6b;
          border: none;
          padding: 6px 14px;
          border-radius: 6px;
          color: white;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.3s ease, transform 0.2s ease;
        }
        .remove-btn:hover {
          background: #e63946;
          transform: scale(1.05);
        }
        .place-order-btn {
          display: block;
          margin: 20px auto 0;
          padding: 14px 30px;
          font-size: 1.2rem;
          font-weight: 600;
          border: none;
          border-radius: 10px;
          background: linear-gradient(45deg, #06d6a0, #1b9aaa);
          color: white;
          cursor: pointer;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .place-order-btn:hover {
          transform: scale(1.05);
          box-shadow: 0 6px 15px rgba(0,0,0,0.2);
        }
        .error-msg {
          color: red;
          text-align: center;
          margin-top: 10px;
          font-weight: 500;
        }
      `}</style>

      <h2 className="cart-title">🛒 Your Cart</h2>

      {cartItems.map((item) => (
        <div key={item.id} className="cart-item">
          <div>
            <span className="cart-item-name">{item.name}</span>
            <span className="cart-item-qty">x {item.quantity}</span>
          </div>
          <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
            Remove
          </button>
        </div>
      ))}

      {cartItems.length > 0 && (
        <button className="place-order-btn" onClick={handlePlaceOrder}>
          ✅ Place Order
        </button>
      )}

      {error && <div className="error-msg">{error}</div>}
    </div>
  );
};

export default Cart;
