import "./App.css";
import Item from "./components/Item";
import Cart from "./components/Cart";
import React from "react";

const App = () => {
  return (
    <div className="App">
      <Item name="Samsung" price={10000} />
      <Item name="Pendrive" price={4000} />
      <Item name="Mobile" price={35000} />
      <Cart />
    </div>
  );
};

export default App;
