import React from "react";
// import logo from './logo.svg';
import Stuff from "./components/stuff";
import Tricksy from "./components/Tricksy";
import "./App.css";
import Fade from "./components/Fade";

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
        {/* <Tricksy /> */}
        <Fade time={"10s"}>
          <Stuff products={products} />
        </Fade>
      </div>
    </main>
  );
}

export default App;
