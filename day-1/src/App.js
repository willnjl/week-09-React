import React from "react";
// import logo from './logo.svg';
import Header from "./components/Header.js";
import Paragraph from "./components/Paragraph.js";
import Square from "./components/Square.js";
import "./App.css";

function App() {
  return (
    <main>
      <Header />

      <div className="container justify-items-center">
        <Paragraph />
        <Square />
      </div>
    </main>
  );
}

export default App;
