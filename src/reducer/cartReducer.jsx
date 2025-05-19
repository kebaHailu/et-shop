export const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_TO_CART":
      // Check if product already exists in cart
      const existingProduct = state.cart.find((item) => item.id === payload.id);

      if (existingProduct) {
        const itemToRemove = state.cart.find((item) => item.id === payload.id);
        if (!itemToRemove) return state;

        return {
          ...state,
          cart: state.cart.filter((item) => item.id !== payload.id),
          total:
            state.total - itemToRemove.price * (itemToRemove.quantity || 1),
        };
      }

      // Add the new product to the cart with quantity
      return {
        ...state,
        cart: [...state.cart, { ...payload, quantity: 1 }],
        total: state.total + payload.price,
      };

    case "REMOVE_FROM_CART":
      // Find the item to remove to get its price
      const itemToRemove = state.cart.find((item) => item.id === payload.id);
      if (!itemToRemove) return state;

      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== payload.id),
        total: state.total - itemToRemove.price * (itemToRemove.quantity || 1),
      };

    default:
      throw new Error("No case found");
  }
};
