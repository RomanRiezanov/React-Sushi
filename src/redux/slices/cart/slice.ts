import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getCartFromLS } from "../../../utils/getProductsFromLS";
import { calcTotalPrice } from "../../../utils/calcTotalPrice";
import { CartProductState, CartSliceState } from "./types";

const { totalPrice, products } = getCartFromLS();

const initialState: CartSliceState = {
  totalPrice: totalPrice,
  products: products,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct(state, action: PayloadAction<CartProductState>) {
      const findProduct = state.products.find(
        (product) => product.id === action.payload.id
      );

      if (findProduct) {
        findProduct.count++;
      } else {
        state.products.push({ ...action.payload, count: 1 });
      }

      state.totalPrice = calcTotalPrice(state.products);
    },
    removeProduct(state, action: PayloadAction<number>) {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    },
    deleteSameProduct(state, action: PayloadAction<number>) {
      const findProduct = state.products.find(
        (product) => product.id === action.payload
      );

      if (findProduct) {
        findProduct.count--;
      }

      state.totalPrice = state.products.length
        ? state.products.reduce((acc, val) => {
            return acc + val.price * val.count;
          }, 0)
        : (state.totalPrice = 0);
    },

    clearProducts(state) {
      state.products = [];
      state.totalPrice = 0;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addProduct, deleteSameProduct, removeProduct, clearProducts } =
  cartSlice.actions;

export default cartSlice.reducer;
