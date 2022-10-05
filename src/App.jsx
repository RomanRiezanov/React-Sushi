import React, { useState } from "react";
import { Route, Routes } from "react-router";
import Header from "./components/Header/Header";
import Cart from "./components/pages/Cart/Cart";
import Error404 from "./components/pages/Error404/Error404";
import Home from "./components/pages/Home/Home";
import SearchContext from "./Context/context";
import "./scss/globals.scss";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <div className="wrapper">
      <SearchContext.Provider value={{ searchQuery, setSearchQuery }}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </SearchContext.Provider>
    </div>
  );
};

export default App;
