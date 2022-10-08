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

const Home = () => {
  const [sushiItems, setSushiItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { activeIndex, activeSort } = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const searchQuery = useContext(SearchContext).searchQuery;

  const filteredProducts = sushiItems.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
    dispatch(setCategoryId(index));
  };

  return (
    <div className={classes.content}>
      <div className="container">
        <div className={classes.content__top}>
          <Categories activeIndex={activeIndex} clickCategory={clickCategory} />
          <Sort activeSort={activeSort} />
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
