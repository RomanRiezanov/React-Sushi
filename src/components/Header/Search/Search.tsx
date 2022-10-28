import React, { ChangeEvent } from "react";
import { useRef } from "react";
import debounce from "lodash.debounce";
import styles from "./Search.module.scss";
import { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectFilter } from "../../../redux/slices/filter/selectors";
import { setSearchValue } from "../../../redux/slices/filter/slice";

const Search = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const { searchValue } = useSelector(selectFilter);
  const searchInput = useRef<HTMLInputElement>(null);

  const onClickClear = () => {
    dispatch(setSearchValue(""));
    setValue("");
    searchInput.current?.focus();
  };

  const updateSearchValue = useCallback(
    debounce((value) => dispatch(setSearchValue(value)), 500),
    []
  );

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    updateSearchValue(e.target.value);
  };

  return (
    <div className={styles.container}>
      <input
        type="text"
        value={value}
        ref={searchInput}
        className={styles.input}
        placeholder="Search..."
        onChange={(e) => onChangeInput(e)}
      />
      {searchValue ? (
        <svg
          className={`${styles.icon} ${styles.closeIcon}`}
          id="Layer_1"
          version="1.1"
          viewBox="0 0 128 128"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => onClickClear()}
        >
          <g>
            <g>
              <path d="M84.815,43.399c-0.781-0.782-2.047-0.782-2.828,0L64.032,61.356L46.077,43.399c-0.781-0.782-2.047-0.782-2.828,0    c-0.781,0.781-0.781,2.047,0,2.828l17.955,17.957L43.249,82.141c-0.781,0.78-0.781,2.047,0,2.828    c0.391,0.39,0.902,0.585,1.414,0.585s1.023-0.195,1.414-0.585l17.955-17.956l17.955,17.956c0.391,0.39,0.902,0.585,1.414,0.585    s1.023-0.195,1.414-0.585c0.781-0.781,0.781-2.048,0-2.828L66.86,64.184l17.955-17.957C85.597,45.447,85.597,44.18,84.815,43.399z     M64.032,14.054c-27.642,0-50.129,22.487-50.129,50.127c0.002,27.643,22.491,50.131,50.133,50.131    c27.639,0,50.125-22.489,50.125-50.131C114.161,36.541,91.674,14.054,64.032,14.054z M64.036,110.313h-0.002    c-25.435,0-46.129-20.695-46.131-46.131c0-25.435,20.693-46.127,46.129-46.127s46.129,20.693,46.129,46.127    C110.161,89.617,89.47,110.313,64.036,110.313z" />
            </g>
          </g>
        </svg>
      ) : (
        <svg
          className={styles.icon}
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title />
          <g id="search">
            <path d="M29.71,28.29l-6.5-6.5-.07,0a12,12,0,1,0-1.39,1.39s0,.05,0,.07l6.5,6.5a1,1,0,0,0,1.42,0A1,1,0,0,0,29.71,28.29ZM14,24A10,10,0,1,1,24,14,10,10,0,0,1,14,24Z" />
          </g>
        </svg>
      )}
    </div>
  );
};

export default Search;
