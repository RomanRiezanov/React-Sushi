import React from "react";
import { Link } from "react-router-dom";
import classes from "./Error404.module.scss";

const Error404 = () => {
  return (
    <section className={classes.page_404}>
      <div className={classes.container}>
        <div className={classes.four_zero_four_bg}>
          <h1>404</h1>
        </div>
        <div className={classes.contant_box_404}>
          <h3>Схоже, що ти заблукав</h3>
          <p>сторінка, яку ти шукаєш, не існує</p>
          <Link to="/" className={classes.link_404}>
            Повернутися на головну
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Error404;
