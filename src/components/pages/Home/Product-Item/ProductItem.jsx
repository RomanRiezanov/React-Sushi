import React, { useState } from "react";
import PopUpProductItem from "./PopUpProductItem/PopUpProductItem";
import classes from "./ProductItem.module.scss";

const SUSHI_SET_SRC = "./assets/img/";

const SushiItem = ({ title, src, price, compound, alt, weight, amount }) => {
  const [sushiCount, setSushiCount] = useState(0);
  const [showPopUp, setShowPopUp] = useState(false);

  const addSushiSet = () => {
    setSushiCount((prev) => prev + 1);
  };

  const showModal = () => {
    setShowPopUp(true);
  };

  const truncate = (text) =>
    text.length > 100 ? `${text.substring(0, 100)}...` : text;

  return (
    <>
      <div className={classes.sushiBlock} onClick={() => showModal()}>
        <img
          className={classes.sushiBlock__image}
          src={`${SUSHI_SET_SRC}${src}`}
          alt={`sushi-set-${alt}`}
        />
        <h4 className={classes.sushiBlock__title}>{title}</h4>
        {compound && (
          <div className={classes.sushiBlock__description}>
            <p>
              <span>Склад: </span>
              {truncate(compound)}
            </p>
            <span>
              {weight}гр.{amount}шт.
            </span>
          </div>
        )}
        <div className={classes.sushiBlock__bottom}>
          <div className={classes.sushiBlock__price}>{price} ₴</div>
          <button
            onClick={addSushiSet}
            className="button button--outline button--add"
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                fill="white"
              />
            </svg>
            <span>Добавить</span>
            <i>{sushiCount}</i>
          </button>
        </div>
      </div>
      <PopUpProductItem
        title={title}
        src={src}
        price={price}
        compound={compound}
        alt={alt}
        weight={weight}
        setShowPopUp={setShowPopUp}
        active={showPopUp}
      />
    </>
  );
};

export default SushiItem;
