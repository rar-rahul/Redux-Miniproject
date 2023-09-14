import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  carTotal: 0,
};

export const CartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      return { ...state, cart: [...state.cart, action.payload] };
    },
    removeCart: (state,action) => {
      return {
        ...state,
        cart:state.cart.filter((c) => c.id !== action.payload.id)
      }
    },
    changeQty: (state, action) => {
      const updatedQty = state.cart.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, qty: action.payload.qty };
        }
        return item;
      });

      return { ...state, cart: updatedQty };
    },
  },
});

export const { addToCart, changeQty,removeCart } = CartSlice.actions;
export const CartReducer = CartSlice.reducer;
