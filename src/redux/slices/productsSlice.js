import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "products/fetchProductsStatus",
  async ({ activeIndex, activeSort }) => {
    const { data } = await axios.get(
      `https://631c632a1b470e0e12009f89.mockapi.io/sushi-sets?${
        activeIndex !== 1 ? "category=" + activeIndex : ""
      }&sortBy=${activeSort.sortType}&order=${activeSort.sortOrder}`
    );
    return data;
  }
);

const initialState = {
  products: [],
  status: "loading",
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
      state.status = "loading";
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
      state.status = "success";
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.products = [];
      state.status = "error";
    });
  },
});

//Selectors
export const selectProducts = (state) => state.product;

// Action creators are generated for each case reducer function
export const { setProducts } = productsSlice.actions;

export default productsSlice.reducer;
