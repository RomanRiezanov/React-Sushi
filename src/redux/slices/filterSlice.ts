import { RootState } from "./../store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export enum sortTypeEnum {
  RATING = "rating",
  PRICE = "price",
}

export enum sortOrderEnum {
  ASC = "asc",
  DESC = "desc",
}

interface FilterSliceState {
  searchValue: string;
  activeIndex: number;
  activeSort: ActiveSort;
}

export interface ActiveSort {
  title: string;
  id: number;
  sortType: sortTypeEnum;
  sortOrder: sortOrderEnum;
  arrow: string;
}

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

//Selectors
export const selectFilter = (state: RootState) => state.filter;

// Action creators are generated for each case reducer function
export const { setSearchValue, setCategoryId, setActiveSort, setFilters } =
  filterSlice.actions;

export default filterSlice.reducer;
