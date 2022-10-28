import { calcTotalPrice } from "./calcTotalPrice";

export const getCartFromLS = () => {
  const cartProducts = localStorage.getItem("cart");
  const products = cartProducts ? JSON.parse(cartProducts) : [];

  return {
    products,
    totalPrice: calcTotalPrice(products),
  };
};
