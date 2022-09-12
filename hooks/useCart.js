import React, { useContext, useReducer, useState } from "react";
import { cartReducer, initCart } from "../reducers/cart.reducer";

/**
 * Context for Cart contents
 */
const CartContext = React.createContext("hello");

/**
 * Wrapper that wraps the value of useContext inside a hook for easier usage
 * @returns current value of the Cart Context
 */
export const useCart = () => {
  return useContext(CartContext);
};

/**
 * Context Provider for CardContext object that wraps the component tree and also
 * provides functions to update the cart
 * @param {any} children the component tree that this Provider encapsulates
 * @returns the CartContext.Provider
 */
export function CartContextProvider({ children }) {
  const cartInfo = useCartInfo();
  return (
    <CartContext.Provider value={cartInfo}>{children}</CartContext.Provider>
  );
}

/**
 * construct that returns the current state and helper functions to update that state from the reducer
 * @returns object of state and functions to update that state
 */
const useCartInfo = () => {
  const [state, dispatch] = useReducer(cartReducer, 0, initCart);

  const addToCart = (product) => {
    dispatch({ type: "add", payload: product });
  };

  const removeFromCart = (product) => {
    dispatch({ type: "remove", payload: product });
  };

  const clearCart = () => {
    dispatch({ type: "clear" });
  };

  return {
    state,
    addToCart,
    removeFromCart,
    clearCart,
  };
};
