import React, { useEffect, useState } from "react";
import Categories from "./Categories/Categories";
import Sort from "./Sort/Sort";
import Skeleton from "./Product-Item/Skeleton/Skeleton";
import ProductItem from "./Product-Item/ProductItem";
import classes from "./Home.module.scss";

const Home = () => {
  const [sushiItems, setSushiItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(1);
  const [activeSort, setActiveSort] = useState({
    title: "популярністю",
    id: 0,
    sortType: "rating",
    sortOrder: "desc",
    arrow: "arrow-bottom.png",
  });

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://631c632a1b470e0e12009f89.mockapi.io/sushi-sets?${
        activeIndex !== 1 ? "category=" + activeIndex : ""
      }&sortBy=${activeSort.sortType}&order=${activeSort.sortOrder}`
    )
      .then((res) => res.json())
      .then((json) => {
        setSushiItems(json);
        setIsLoading(false);
      });
  }, [activeIndex, activeSort]);

  const clickCategory = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className={classes.content}>
      <div className="container">
        <div className={classes.content__top}>
          <Categories activeIndex={activeIndex} clickCategory={clickCategory} />
          <Sort activeSort={activeSort} setActiveSort={setActiveSort} />
        </div>
        <h2 className={classes.content__title}>Всі сети</h2>
        <div className={classes.content__items}>
          {isLoading
            ? [...new Array(8)].map((_, index) => <Skeleton key={index} />)
            : sushiItems.map((sushiSet) => (
                <ProductItem key={sushiSet.id} {...sushiSet} />
              ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
