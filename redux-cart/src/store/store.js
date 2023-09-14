import { configureStore } from "@reduxjs/toolkit";
import { CartReducer } from "../Redux/cartslice";

export const store = configureStore({
  reducer: {
    cart: CartReducer
  }
});
