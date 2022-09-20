import React, { useState } from "react";
import classes from "./Sort.module.scss";

const ARROW_SRC = "./assets/img/arrows/";

const sortedList = [
  {
    title: "популярністю",
    id: 0,
    sortType: "rating",
    sortOrder: "desc",
    arrow: "arrow-bottom.png",
  },
  {
    title: "популярністю",
    id: 1,
    sortType: "rating",
    sortOrder: "asc",
    arrow: "arrow-top.png",
  },
  {
    title: "ціною",
    id: 2,
    sortType: "price",
    sortOrder: "desc",
    arrow: "arrow-bottom.png",
  },
  {
    title: "ціною",
    id: 3,
    sortType: "price",
    sortOrder: "asc",
    arrow: "arrow-top.png",
  },
];

const Sort = () => {
  const [isOpenPopUp, setIsOpenPopUp] = useState(false);
  const [activeSort, setActiveSort] = useState(0);

  const dropPopUp = () => {
    setIsOpenPopUp(!isOpenPopUp);
  };

  const chooseActiveSort = (index) => {
    setActiveSort(index);
    setIsOpenPopUp(false);
  };

  return (
    <div className={classes.sort}>
      <div className={classes.sort__label} onClick={dropPopUp}>
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          />
        </svg>
        <b>Сортування за:</b>
        <span>
          {activeSort.title}
          <div className={classes.arrowBlock}>
            <img src={`${ARROW_SRC}${activeSort.arrow}`} alt="arrow" />
          </div>
        </span>
      </div>
      {isOpenPopUp && (
        <div className={classes.sort__popup}>
          <ul>
            {sortedList.map((sort) => (
              <li
                key={sort.id}
                className={
                  activeSort.sortType === sort.sortType ? "active" : ""
                }
                onClick={() => chooseActiveSort(sort)}
              >
                {sort.title}
                <div className={classes.arrowBlock}>
                  <img src={`${ARROW_SRC}${sort.arrow}`} alt="arrow" />
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sort;
