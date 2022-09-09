import React from "react";
import Categories from "./Categories/Categories";
import Sort from "./Sort/Sort";
import SushiItem from "./Sushi-Item/SushiItem";

const sushiItems = [
  {
    title: "Сет Банзай",
    src: "set_banzai.png",
    price: 399,
    alt: "banzai",
    id: 1,
  },
  {
    title: "Сет Які-суші",
    src: "set_yaki.png",
    price: 299,
    alt: "yaki",
    id: 2,
  },
  {
    title: "Сет Саймон",
    src: "set_saimon.png",
    price: 399,
    alt: "saimon",
    id: 3,
  },
  {
    title: "Сет Кайфуй",
    src: "set_kaifui.png",
    price: 369,
    alt: "kaifui",
    id: 4,
  },
  {
    title: "Сет Хот",
    src: "set_hot.png",
    price: 389,
    alt: "hot",
    id: 5,
  },
  {
    title: "BEST SET",
    src: "set_best.png",
    price: 429,
    alt: "best",
    id: 6,
  },
  {
    title: "Сет Кілограм",
    src: "set_kilogram.png",
    price: 439,
    alt: "kilogram",
    id: 7,
  },
  {
    title: "Сет Сакура",
    src: "set_sakura.png",
    price: 389,
    alt: "sakura",
    id: 8,
  },
];

const Main = () => {
  return (
    <div className="content">
      <div className="container">
        <div className="content__top">
          <Categories />
          <Sort />
        </div>
        <h2 className="content__title">Всі сети</h2>
        <div className="content__items">
          {sushiItems.map((sushiSet) => (
            <SushiItem key={sushiSet.id} {...sushiSet} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
