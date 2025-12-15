import React, { createContext, useReducer, useContext, useMemo } from 'react';
import { cartReducer, initialCartState } from '../reducers/cartReducer';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialCartState);

  const addItem = (product) => {
    dispatch({ type: 'ADD_ITEM', payload: product });
  };

  const removeItem = (id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const value = useMemo(() => ({
    items: state.items,
    totalItems: state.totalItems,
    addItem,
    removeItem,
    clearCart
  }), [state.items, state.totalItems]);

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart harus digunakan didalam CartProvider');
  }
  return context;
};