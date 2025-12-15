import React from 'react';
import { useCart } from '../context/CartContext';

const CartBadge = () => {
  const { totalItems } = useCart();

  return (
    <div className="cart-badge">
      <span className="cart-icon">🛒</span>
      {totalItems > 0 && (
        <span className="cart-count">{totalItems}</span>
      )}
    </div>
  );
};

export default CartBadge;