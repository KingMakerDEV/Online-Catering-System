import { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
  const existing = cart.find(i => i.id === item.id);
  if (existing) {
    existing.quantity += 1;
    setCart([...cart]);
  } else {
    setCart([...cart, { ...item, quantity: 1 }]);
  }
};

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};