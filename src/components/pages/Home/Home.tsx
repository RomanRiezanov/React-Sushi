import React, { useEffect } from "react";
import Categories from "./Categories/Categories";
import Sort, { sortedList } from "./Sort/Sort";
import Skeleton from "./Product-Item/Skeleton/Skeleton";
import ProductItem from "./Product-Item/ProductItem";
import classes from "./Home.module.scss";
import { useDispatch, useSelector } from "react-redux";
import qs from "qs";
import { useNavigate } from "react-router";
import { useRef } from "react";
import { useCallback } from "react";
import { selectFilter } from "../../../redux/slices/filter/selectors";
import { ActiveSort } from "../../../redux/slices/filter/types";
import { setCategoryId, setFilters } from "../../../redux/slices/filter/slice";
import { selectProducts } from "../../../redux/slices/products/selectors";
import { Product } from "../../../redux/slices/products/types";
import { fetchProducts } from "../../../redux/slices/products/slice";

const Home = () => {
  const isSearch = useRef(false);
  const isMounted = useRef(false);
  const {
    activeIndex,
    activeSort,
    searchValue,
  }: { activeIndex: number; activeSort: ActiveSort; searchValue: string } =
    useSelector(selectFilter);

  const { products, status } = useSelector(selectProducts);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const clickCategory = useCallback((index: number) => {
    dispatch(setCategoryId(index));
  }, []);

  const filteredProducts = products.filter((product: Product) =>
    product.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  const getProducts = async () => {
    dispatch(
      //@ts-ignore
      fetchProducts({
        activeIndex,
        activeSort,
      })
    );
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

      dispatch(
        setFilters({
          ...newParams,
          activeIndex: Number(activeIndex),
          activeSort: sort ? sort : sortedList[0],
          searchValue: "",
        })
      );
      isSearch.current = true;
    }
  }, []);

  // If there was a first render, then we request products
  useEffect(() => {
    getProducts();
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
          {status === "error" && (
            <div className={classes.errorBlock}>
              <h2>
                Продукти не знайдені <span>😕</span>
              </h2>
              <p>
                Вибачте,
                <br />
                Щось пішло не так, спробуйте пізніше!
              </p>
            </div>
          )}
          {status === "loading"
            ? [...new Array(8)].map((_, index) => <Skeleton key={index} />)
            : filteredProducts.map((product: Product) => (
                <ProductItem key={product.id} {...product} />
              ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
