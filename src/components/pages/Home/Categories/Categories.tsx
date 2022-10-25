import React from "react";
import classes from "./Categories.module.scss";

interface CategoriesProps {
  activeIndex: number;
  clickCategory: (id: number) => void;
}

const categories = [
  { title: "Всі", id: 1 },
  { title: "Сети", id: 2 },
  { title: "Роли", id: 3 },
  { title: "Напої", id: 4 },
  { title: "Акції", id: 5 },
];

const Categories = ({ activeIndex, clickCategory }: CategoriesProps) => {
  return (
    <div className={classes.categories}>
      <ul>
        {categories.map((category) => (
          <li
            key={category.id}
            className={activeIndex === category.id ? classes.active : ""}
            onClick={() => clickCategory(category.id)}
          >
            {category.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
