import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  ActiveSort,
  FilterSliceState,
  sortOrderEnum,
  sortTypeEnum,
} from "./types";

const initialState: FilterSliceState = {
  searchValue: "",
  activeIndex: 1,
  activeSort: {
    title: "популярністю",
    id: 0,
    sortType: sortTypeEnum.RATING,
    sortOrder: sortOrderEnum.DESC,
    arrow: "arrow-bottom.png",
  },
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
    setCategoryId(state, action: PayloadAction<number>) {
      state.activeIndex = action.payload;
    },
    setActiveSort(state, action: PayloadAction<ActiveSort>) {
      state.activeSort = action.payload;
    },
    setFilters(state, action: PayloadAction<FilterSliceState>) {
      state.activeSort = action.payload.activeSort;
      state.activeIndex = Number(action.payload.activeIndex);
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSearchValue, setCategoryId, setActiveSort, setFilters } =
  filterSlice.actions;

export default filterSlice.reducer;
