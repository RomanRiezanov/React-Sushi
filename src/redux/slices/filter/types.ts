export enum sortTypeEnum {
  RATING = "rating",
  PRICE = "price",
}

export enum sortOrderEnum {
  ASC = "asc",
  DESC = "desc",
}

export interface FilterSliceState {
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
