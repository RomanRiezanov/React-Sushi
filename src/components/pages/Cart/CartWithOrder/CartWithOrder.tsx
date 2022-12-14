import React from "react";
import CartSvgGenerator from "../../../../icons/CartSvgGenerator";
import CartProduct from "./CartProduct/CartProduct";
import { useDispatch, useSelector } from "react-redux";
import classes from "./CartWithOrder.module.scss";
import { Link } from "react-router-dom";
import { selectCart } from "../../../../redux/slices/cart/selectors";
import { clearProducts } from "../../../../redux/slices/cart/slice";
import { Product } from "../../../../redux/slices/products/types";

const CartWithOrder = () => {
  const dispatch = useDispatch();
  const { totalPrice, products }: { totalPrice: number; products: Product[] } =
    useSelector(selectCart);

  const clearCart = () => {
    dispatch(clearProducts());
  };

  const amountOfProducts = products.reduce(
    (acc: number, product: Product) => acc + product.count,
    0
  );

  return (
    <div className="cart">
      <div className={classes.cart__top}>
        <h2 className={classes.content__title}>
          <img src="./assets/img/icons/cart.png" alt="cart" />
          Кошик
        </h2>
        <div className={classes.cart__clear} onClick={clearCart}>
          <CartSvgGenerator id="trash" />
          <span>Очистити кошик</span>
        </div>
      </div>
      <div className={classes.content__item}>
        {products.map((product) => (
          <CartProduct key={product.id} {...product} />
        ))}
      </div>
      <div className={classes.cart__bottom}>
        <div className={classes.cart__bottom_details}>
          <span>
            Всього наборів: <b>{amountOfProducts}</b>
          </span>
          <span>
            Загальна сума: <b>{totalPrice} ₴</b>
          </span>
        </div>
        <div className={classes.cart__bottom_buttons}>
          <Link
            to="/"
            className={`${classes.button} button button--outline button--add ${classes.go_back_btn}`}
          >
            <CartSvgGenerator id="grey-arrow-left" />
            <span>Повернутися назад</span>
          </Link>
          <div className={`${classes.button} button ${classes.pay_btn}`}>
            <span>Оплатити зараз</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartWithOrder;
