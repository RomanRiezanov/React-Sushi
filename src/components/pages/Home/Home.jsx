import React, { useEffect, useState } from "react";
import Categories from "./Categories/Categories";
import Sort from "./Sort/Sort";
import Skeleton from "./Sushi-Item/Skeleton/Skeleton";
import SushiItem from "./Sushi-Item/SushiItem";
import classes from "./Home.module.scss";

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
    <div className={classes.content}>
      <div className="container">
        <div className={classes.content__top}>
          <Categories />
          <Sort />
        </div>
        <h2 className={classes.content__title}>Всі сети</h2>
        <div className={classes.content__items}>
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
