import React from "react";
import { Link } from "react-router-dom";
import classes from "./CartEmpty.module.scss";

const CartEmpty = () => {
  return (
    <div className={`${classes.cart} ${classes.cart__empty}`}>
      <h2>
        Кошик порожній <icon>😕</icon>
      </h2>
      <p>
        Найімовірніше, ви нічого не замовляли
        <br />
        Щоб зробити замовлення, перейди на головну сторінку.
      </p>
      <img src="./assets/img/icons/empty-cart.png" alt="Empty cart" />
      <Link to="/" className="button button--black">
        <span>Повернутися назад</span>
      </Link>
    </div>
  );
};

export default CartEmpty;
