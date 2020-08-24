import React from "react";
// import logo from './logo.svg';
import Stuff from "./components/stuff";
import Basket from "./components/Basket";

import "./App.css";

const products = [
  { name: "Coffee", price: 2.1 },
  { name: "Bananas", price: 3.5 },
  { name: "Milk", price: 250.65 },
  { name: "The Great Milk Shortage by Simon Schama", price: 12.99 },
];

function App() {
  return (
    <main>
      <div
        className="container"
        style={{ alignItems: "center", justifyContent: "center" }}
      >
        <Stuff />
        <Basket items={products} />
      </div>
    </main>
  );
}

export default App;
