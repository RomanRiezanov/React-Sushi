import React, { useEffect, useState } from "react";
import Categories from "./Categories/Categories";
import Sort, { sortedList } from "./Sort/Sort";
import Skeleton from "./Product-Item/Skeleton/Skeleton";
import ProductItem from "./Product-Item/ProductItem";
import classes from "./Home.module.scss";
import { useContext } from "react";
import SearchContext from "../../../Context/context";
import { useDispatch, useSelector } from "react-redux";
import { setCategoryId, setFilters } from "../../../redux/slices/filterSlice";
import axios from "axios";
import qs from "qs";
import { useNavigate } from "react-router";
import { useRef } from "react";
import { useCallback } from "react";

const Home = () => {
  const isSearch = useRef(false);
  const isMounted = useRef(false);
  const [sushiItems, setSushiItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { activeIndex, activeSort } = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const searchQuery = useContext(SearchContext).searchQuery;

  const clickCategory = useCallback((index) => {
    dispatch(setCategoryId(index));
  }, []);

  const filteredProducts = sushiItems.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const fetchProducts = () => {
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
  };

  // if the parameters were changed and there was a first render
  useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        sortType: activeSort.sortType,
        activeIndex,
        sortOrder: activeSort.sortOrder,
      });
      navigate(`?${queryString}`);
    }
    isMounted.current = true;
  }, [activeIndex, activeSort.sortType, activeSort.sortOrder]);

  // If there was a first render, then we check the URL parameters and save them in redux
  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));

      const newParams = {
        activeIndex: params.activeIndex,
        activeSort: {
          ...activeSort,
          sortType: params.sortType,
          sortOrder: params.sortOrder,
        },
      };

      const sort = sortedList.find((item) => {
        return (
          item.sortType === newParams.activeSort.sortType &&
          item.sortOrder === newParams.activeSort.sortOrder
        );
      });

      dispatch(setFilters({ ...newParams, activeSort: sort }));
      isSearch.current = true;
    }
  }, []);

  // If there was a first render, then we request products
  useEffect(() => {
    if (!isSearch.current) {
      fetchProducts();
    }

    isSearch.current = false;
  }, [activeIndex, activeSort.sortType, activeSort.sortOrder]);

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
