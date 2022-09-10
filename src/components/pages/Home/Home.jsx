import React, { useEffect, useState } from "react";
import Categories from "./Categories/Categories";
import Sort from "./Sort/Sort";
import Skeleton from "./Sushi-Item/Skeleton";
import SushiItem from "./Sushi-Item/SushiItem";

const Home = () => {
  const [sushiItems, setSushiItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("https://631c632a1b470e0e12009f89.mockapi.io/sushi-sets")
      .then((res) => res.json())
      .then((json) => {
        setSushiItems(json);
        setIsLoading(false);
      });
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
          {isLoading
            ? [...new Array(8)].map((_, index) => <Skeleton key={index} />)
            : sushiItems.map((sushiSet) => (
                <SushiItem key={sushiSet.id} {...sushiSet} />
              ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
