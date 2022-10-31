import { Product } from "./../redux/slices/products/types";

export const calcTotalPrice = (products: Product[]) => {
  return products.reduce((acc, val) => acc + val.price * val.count, 0);
};
