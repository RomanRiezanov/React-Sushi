import React from "react";
import CartSvgGenerator from "../../../../icons/CartSvgGenerator";
import classes from "./CartWithOrder.module.scss";

const CartWithOrder = () => {
  return (
    <div class="cart">
      <div class={classes.cart__top}>
        <h2 class={classes.content__title}>
          <img src="./assets/img/icons/cart.png" alt="cart" /> Корзина
        </h2>
        <div class={classes.cart__clear}>
          <CartSvgGenerator id="trash" />
          <span>Очистить корзину</span>
        </div>
      </div>
      <div class={classes.content__item}>
        <div className={classes.cart__item}>
          <div className={classes.cart__item_img}>
            <img src="./assets/img/sets/set_banzai.png" alt="cartItem" />
          </div>
          <div class={classes.cart__item_info}>
            <h3>Сырный цыпленок</h3>
            <p>тонкое тесто, 26 см.</p>
          </div>
          <div class={classes.cart__item_count}>
            <div
              class={`${classes.button} button button--outline button--circle ${classes.cart__item_count_minus}`}
            >
              <CartSvgGenerator id="minus" />
            </div>
            <b>2</b>
            <div
              class={`${classes.button} button button--outline button--circle ${classes.cart__item_count_plus}`}
            >
              <CartSvgGenerator id="plus" />
            </div>
          </div>
          <div class={classes.cart__item_price}>
            <b>770 ₽</b>
          </div>
          <div class={classes.cart__item_remove}>
            <div
              class={`${classes.button} button button--outline button--circle`}
            >
              <CartSvgGenerator id="plus" />
            </div>
          </div>
        </div>
      </div>
      <div class={classes.cart__bottom}>
        <div class={classes.cart__bottom_details}>
          <span>
            Всего пицц: <b>3 шт.</b>
          </span>
          <span>
            Сумма заказа: <b>900 ₽</b>
          </span>
        </div>
        <div class={classes.cart__bottom_buttons}>
          <a
            href="/"
            class={`${classes.button} button button--outline button--add ${classes.go_back_btn}`}
          >
            <CartSvgGenerator id="grey-arrow-left" />
            <span>Вернуться назад</span>
          </a>
          <div class={`${classes.button} button ${classes.pay_btn}`}>
            <span>Оплатить сейчас</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartWithOrder;
