import React, { useEffect, useState } from "react";
import Categories from "./Categories/Categories";
import Sort from "./Sort/Sort";
import SushiItem from "./Sushi-Item/SushiItem";

//https://631c632a1b470e0e12009f89.mockapi.io/sushi-sets

const Main = () => {
  const [sushiItems, setSushiItems] = useState([]);
  useEffect(() => {
    fetch("https://631c632a1b470e0e12009f89.mockapi.io/sushi-sets")
      .then((res) => res.json())
      .then((json) => setSushiItems(json));
  }, []);

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
