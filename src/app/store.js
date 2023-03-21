import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../features/cart/model/cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});
