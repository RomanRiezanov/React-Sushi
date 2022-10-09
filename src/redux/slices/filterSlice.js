import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeIndex: 1,
  activeSort: {
    title: "популярністю",
    id: 0,
    sortType: "rating",
    sortOrder: "desc",
    arrow: "arrow-bottom.png",
  },
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategoryId(state, action) {
      state.activeIndex = action.payload;
    },
    setActiveSort(state, action) {
      state.activeSort = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCategoryId, setActiveSort } = filterSlice.actions;

export default filterSlice.reducer;