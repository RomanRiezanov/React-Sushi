import React, { useState } from "react";

const categories = [
  { title: "Всі", id: 1 },
  { title: "Сети", id: 2 },
  { title: "Роли", id: 3 },
  { title: "Напої", id: 4 },
  { title: "Акції", id: 5 },
];

const Categories = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const clickCategory = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="categories">
      <ul>
        {categories.map((category) => (
          <li
            key={category.id}
            className={activeIndex === category.id ? "active" : ""}
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
