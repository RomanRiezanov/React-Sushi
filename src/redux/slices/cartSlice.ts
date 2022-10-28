import { RootState } from "./../store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CartProductState {
  alt: string;
  amount: number;
  compound: string;
  count: number;
  id: number;
  price: number;
  src: string;
  title: string;
  weight: number;
}

interface CartSliceState {
  totalPrice: number;
  products: CartProductState[];
}

const initialState: CartSliceState = {
  totalPrice: 0,
  products: [],
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

      state.totalPrice = state.products.reduce(
        (acc, val) => acc + val.price * val.count,
        0
      );
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

//Selectors
export const selectCart = (state: RootState) => state.cart;
export const selectCartProductById = (id: number) => (state: RootState) =>
  state.cart.products.find((product) => product.id === id);

// Action creators are generated for each case reducer function
export const { addProduct, deleteSameProduct, removeProduct, clearProducts } =
  cartSlice.actions;

export default cartSlice.reducer;
