import React from "react";
import Categories from "./Categories/Categories";
import Sort from "./Sort/Sort";
import SushiItem from "./Sushi-Item/SushiItem";

const Main = () => {
  return (
    <div class="content">
      <div class="container">
        <div class="content__top">
          <Categories />
          <Sort />
        </div>
        <h2 class="content__title">Всі сети</h2>
        <div class="content__items">
          <SushiItem
            title="Сет Банзай"
            src="set_banzai.png"
            price={399}
            alt="banzai"
          />
          <SushiItem
            title="Сет Які-суші"
            src="set_yaki.png"
            price={299}
            alt="yaki"
          />
          <SushiItem
            title="Сет Саймон"
            src="set_saimon.png"
            price={399}
            alt="saimon"
          />
          <SushiItem
            title="Сет Кайфуй"
            src="set_kaifui.png"
            price={369}
            alt="kaifui"
          />
          <SushiItem title="Сет Хот" src="set_hot.png" price={389} alt="hot" />
          <SushiItem
            title="BEST SET"
            src="set_best.png"
            price={429}
            alt="best"
          />
          <SushiItem
            title="Сет Кілограм"
            src="set_kilogram.png"
            price="439"
            alt="kilogram"
          />
          <SushiItem
            title="Сет Сакура"
            src="set_sakura.png"
            price={389}
            alt="sakura"
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
