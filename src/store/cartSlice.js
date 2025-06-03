import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartList: [],
    total: 0,
  },
  reducers: {
    add(state, action) {
      state.cartList.push(action.payload);
      state.total = state.cartList.reduce((acc, curr) => acc + curr.price, 0);
    },
    remove(state, action) {
      state.cartList = state.cartList.filter(
        (item) => item.id !== action.payload.id
      );
      state.total = state.cartList.reduce((acc, curr) => acc + curr.price, 0);
    },
  },
});

export const { add, remove } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
