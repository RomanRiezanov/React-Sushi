import { useDispatch } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./slices/filter/slice";
import cartReducer from "./slices/cart/slice";
import productsReducer from "./slices/products/slice";

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    cart: cartReducer,
    product: productsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
