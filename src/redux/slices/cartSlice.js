import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalPrice: 0,
  products: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct(state, action) {
      const findProduct = state.products.find(
        (product) => product.id === action.payload.id
      );

      if (findProduct) {
        findProduct.count++;
      } else {
        state.products.push({ ...action.payload, count: 1 });
      }

      state.totalPrice = state.products.reduce(
        (acc, val) => acc + val.price * val.count,
        0
      );
    },
    removeProduct(state, action) {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    },
    deleteSameProduct(state, action) {
      const findProduct = state.products.find(
        (product) => product.id === action.payload
      );

      if (findProduct) {
        findProduct.count--;
      }
      state.totalPrice = state.products.reduce(
        (acc, val) => acc + val.price * val.count,
        0
      );
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
