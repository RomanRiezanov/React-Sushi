import { ActiveSort } from "./filterSlice";
import { RootState } from "./../store";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "products/fetchProductsStatus",
  async ({
    activeIndex,
    activeSort,
  }: {
    activeIndex: number;
    activeSort: ActiveSort;
  }) => {
    const { data } = await axios.get<Product[]>(
      `https://631c632a1b470e0e12009f89.mockapi.io/sushi-sets?${
        activeIndex !== 1 ? "category=" + activeIndex : ""
      }&sortBy=${activeSort.sortType}&order=${activeSort.sortOrder}`
    );
    return data as Product[];
  }
);

export interface Product {
  title: string;
  src: string;
  price: number;
  compound: string;
  alt: string;
  weight: number;
  amount: number;
  id: number;
  count: number;
}

enum Status {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}

interface ProductSliceState {
  products: Product[];
  status: Status;
}

const initialState: ProductSliceState = {
  products: [],
  status: Status.LOADING,
};

export const productsSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts(state, action) {
      state.products = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state, action) => {
      state.products = [];
      state.status = Status.LOADING;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
      state.status = Status.SUCCESS;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.products = [];
      state.status = Status.ERROR;
    });
  },
});

//Selectors
export const selectProducts = (state: RootState) => state.product;

// Action creators are generated for each case reducer function
export const { setProducts } = productsSlice.actions;

export default productsSlice.reducer;
