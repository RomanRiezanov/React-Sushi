import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchValue: "",
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
    setSearchValue(state, action) {
      state.searchValue = action.payload;
    },
    setCategoryId(state, action) {
      state.activeIndex = action.payload;
    },
    setActiveSort(state, action) {
      state.activeSort = action.payload;
    },
    setFilters(state, action) {
      state.activeSort = action.payload.activeSort;
      state.activeIndex = Number(action.payload.activeIndex);
    },
  },
});

//Selectors
export const selectFilter = (state) => state.filter;

// Action creators are generated for each case reducer function
export const { setSearchValue, setCategoryId, setActiveSort, setFilters } =
  filterSlice.actions;

export default filterSlice.reducer;
