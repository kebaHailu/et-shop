import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "../reducer/cartReducer";
const initialState = {
  cart: [],
  total: 0,
};

const CartContext = createContext(initialState);

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (product) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });
  };
  const removeFromCart = (product) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: product,
    });
  };
  const value = {
    total: state.total,
    cart: state.cart,
    addToCart,
    removeFromCart,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);
  return context;
};
