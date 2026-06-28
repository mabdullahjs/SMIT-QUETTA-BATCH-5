import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],

  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
  },
});
export const {addToCart} = cartSlice.actions 
export default cartSlice.reducer;
