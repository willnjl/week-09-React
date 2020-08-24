import React from "react";
// import logo from './logo.svg';
import Stuff from "./components/stuff";

import "./App.css";

function App() {
  return (
    <main>
      <div
        className="container"
        style={{ alignItems: "center", justifyContent: "center" }}
      >
        <Stuff />
      </div>
    </main>
  );
}

export default App;
