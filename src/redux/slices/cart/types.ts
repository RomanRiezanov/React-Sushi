import { Product } from "../products/types";

export interface CartSliceState {
  totalPrice: number;
  products: Product[];
}
