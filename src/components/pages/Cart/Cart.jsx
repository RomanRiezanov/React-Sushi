import React from "react";
import classes from "./Cart.module.scss";
import CartWithOrder from "./CartWithOrder/CartWithOrder";

const Cart = () => {
  return (
    <div>
      <div className={classes.content}>
        <div className="container container--cart">
          <CartWithOrder />
        </div>
      </div>
    </div>
  );
};

export default Cart;
