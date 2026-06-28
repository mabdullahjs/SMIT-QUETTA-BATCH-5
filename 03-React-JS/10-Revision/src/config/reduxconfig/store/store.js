import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../reducers/cartSlice";
const store = configureStore({
  reducer: {
    cart: cartReducer,
  }
});

export default store;
