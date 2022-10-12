import React from "react";
import { useSelector } from "react-redux";
import classes from "./Cart.module.scss";
import CartEmpty from "./CartEmpty/CartEmpty";
import CartWithOrder from "./CartWithOrder/CartWithOrder";

const Cart = () => {
  const { products } = useSelector((state) => state.cart);
  console.log(products);
  return (
    <div>
      <div className={classes.content}>
        <div className="container container--cart">
          {products.length ? <CartWithOrder /> : <CartEmpty />}
        </div>
      </div>
    </div>
  );
};

export default Cart;
