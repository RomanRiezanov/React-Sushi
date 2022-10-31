import React from "react";
import { Route, Routes } from "react-router";
import Header from "./components/Header/Header";
import Home from "./components/pages/Home/Home";
import "./scss/globals.scss";

const Cart = React.lazy(() => import("./components/pages/Cart/Cart"));
const Error404 = React.lazy(
  () => import("./components/pages/Error404/Error404")
);

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/cart"
          element={
            <React.Suspense fallback={<div>Loading...</div>}>
              <Cart />
            </React.Suspense>
          }
        />
        <Route
          path="*"
          element={
            <React.Suspense fallback={<div>Loading...</div>}>
              <Error404 />
            </React.Suspense>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
