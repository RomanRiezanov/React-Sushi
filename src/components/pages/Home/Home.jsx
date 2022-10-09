import React, { useEffect, useState } from "react";
import Categories from "./Categories/Categories";
import Sort from "./Sort/Sort";
import Skeleton from "./Product-Item/Skeleton/Skeleton";
import ProductItem from "./Product-Item/ProductItem";
import classes from "./Home.module.scss";
import { useContext } from "react";
import SearchContext from "../../../Context/context";
import { useDispatch, useSelector } from "react-redux";
import { setCategoryId } from "../../../redux/slices/filterSlice";
import axios from "axios";

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
  const searchQuery = useContext(SearchContext).searchQuery;

  const filteredProducts = sushiItems.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        `https://631c632a1b470e0e12009f89.mockapi.io/sushi-sets?${
          activeIndex !== 1 ? "category=" + activeIndex : ""
        }&sortBy=${activeSort.sortType}&order=${activeSort.sortOrder}`
      )
      .then((res) => {
        setSushiItems(res.data);
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
            : filteredProducts.map((product) => (
                <ProductItem key={product.id} {...product} />
              ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
