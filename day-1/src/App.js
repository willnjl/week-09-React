import React from "react";
// import logo from './logo.svg';
import Header from "./components/Header.js";
import Paragraph from "./components/Paragraph.js";
import Square from "./components/Square.js";
import People from "./components/People.js";
import "./App.css";

function App() {
  return (
    <main>
      <Header />

      <div
        className="container"
        style={{
          border: "1px red solid",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Paragraph />
        <Square />
        <People />
      </div>
    </main>
  );
}

export default App;
