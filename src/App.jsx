import React from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import "./scss/app.scss";

const App = () => {
  return (
    <div>
      <div class="wrapper">
        <Header />
        <Main />
      </div>
    </div>
  );
};

export default App;
