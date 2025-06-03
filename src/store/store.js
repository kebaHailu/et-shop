import { configurStore } from "@reduxjs/toolkit";
import { cartReducer } from "./cartSlice"


export const store = configurStore({
    reducer:{
        cartState:cartReducer, 
    }
});

