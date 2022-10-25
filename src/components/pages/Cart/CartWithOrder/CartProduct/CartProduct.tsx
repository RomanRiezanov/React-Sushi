import React from "react";
import classes from "./CartProduct.module.scss";
import CartSvgGenerator from "../../../../../icons/CartSvgGenerator";
import { useDispatch } from "react-redux";
import {
  addProduct,
  deleteSameProduct,
  removeProduct,
} from "../../../../../redux/slices/cartSlice";

interface CartProductProps {
  title: string;
  compound: string;
  count: number;
  price: number;
  src: string;
  alt: string;
  id: number;
  weight: number;
  amount: number;
}

const PRODUCT_SRC = "./assets/img/";

const CartProduct = ({
  title,
  compound,
  count,
  price,
  src,
  alt,
  id,
  weight,
  amount,
}: CartProductProps) => {
  const dispatch = useDispatch();

  const addSameProduct = () => {
    dispatch(addProduct({ id }));
  };

  const removeSameProduct = () => {
    if (count <= 1) {
      dispatch(removeProduct(id));
      dispatch(deleteSameProduct(id));
    } else {
      dispatch(deleteSameProduct(id));
    }
  };

  const deleteProduct = () => {
    dispatch(removeProduct(id));
  };

  return (
    <div className={classes.cart__item}>
      <div className={classes.cart__item_img}>
        <img src={`${PRODUCT_SRC}${src}`} alt={alt} />
      </div>
      <div className={classes.cart__item_info}>
        <h3>{title}</h3>
        <span>
          {weight}гр.{amount}шт.
        </span>
      </div>
      <div className={classes.cart__item_count}>
        <div
          onClick={removeSameProduct}
          className={`${classes.button} button button--outline button--circle ${classes.cart__item_count_minus}`}
        >
          <CartSvgGenerator id="minus" />
        </div>
        <b>{count}</b>
        <div
          onClick={addSameProduct}
          className={`${classes.button} button button--outline button--circle ${classes.cart__item_count_plus}`}
        >
          <CartSvgGenerator id="plus" />
        </div>
      </div>
      <div className={classes.cart__item_price}>
        <b>{price * count} ₴</b>
      </div>
      <div className={classes.cart__item_remove}>
        <div
          className={`${classes.button} button button--outline button--circle`}
          onClick={deleteProduct}
        >
          <CartSvgGenerator id="plus" />
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
