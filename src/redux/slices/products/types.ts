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

export enum Status {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}

export interface ProductSliceState {
  products: Product[];
  status: Status;
}
