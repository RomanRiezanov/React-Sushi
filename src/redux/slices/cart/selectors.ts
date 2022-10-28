import { RootState } from "../../store";

export const selectCart = (state: RootState) => state.cart;
export const selectCartProductById = (id: number) => (state: RootState) =>
  state.cart.products.find((product) => product.id === id);
