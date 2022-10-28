import React from "react";
import { useSelector } from "react-redux";
import { selectCart } from "../../../redux/slices/cart/selectors";
import classes from "./Cart.module.scss";
import CartEmpty from "./CartEmpty/CartEmpty";
import CartWithOrder from "./CartWithOrder/CartWithOrder";

const Cart = () => {
  const { products } = useSelector(selectCart);
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
