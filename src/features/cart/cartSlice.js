import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        addToCart: (state, action) => {
            state.push(action.payload);
        },
        removeFormCart: (state, action) => {
            return state.filter(item => item.id !== action.payload);
        }
    }
});

export const {addToCart, removeFormCart} = cartSlice.actions;
export default cartSlice.reducer;