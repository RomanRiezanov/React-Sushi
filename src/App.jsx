import React from "react";
import { Route, Routes } from "react-router";
import Header from "./components/Header/Header";
import Cart from "./components/pages/Cart/Cart";
import Error404 from "./components/pages/Error404/Error404";
import Home from "./components/pages/Home/Home";
import "./scss/globals.scss";

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
};

export default App;
