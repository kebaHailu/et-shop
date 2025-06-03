const { createSlice } = require("@reduxjs/toolkit");
const cartSlice = createSlice({
    name:"cart",
    initialState: {
        cartList: [],
        total:0
    }, 
    reducer: {
        add(state, action){

        },
        remove(){

        },
    }
})


export const { add, remove } = cartSlice.actions; 
export const cartReducer = cartSlice.reducer;