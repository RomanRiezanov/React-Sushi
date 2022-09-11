import React from "react";
import { Link } from "react-router-dom";
import classes from "./Cart.module.scss";
import CartWithOrder from "./CartWithOrder/CartWithOrder";

const Cart = () => {
  return (
    // <div>
    //   <div className={classes.content}>
    //     <div className="container container--cart">
    //       <div className={`${classes.cart} ${classes.cart__empty}`}>
    //         <h2>
    //           Корзина пустая <icon>😕</icon>
    //         </h2>
    //         <p>
    //           Вероятней всего, вы не заказывали ещё пиццу.
    //           <br />
    //           Для того, чтобы заказать пиццу, перейди на главную страницу.
    //         </p>
    //         <img src="/img/empty-cart.png" alt="Empty cart" />
    //         <Link to="/" className="button button--black">
    //           <span>Вернуться назад</span>
    //         </Link>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <CartWithOrder />
  );
};

export default Cart;
