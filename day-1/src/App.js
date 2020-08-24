import React from "react";
// import logo from './logo.svg';
import Stuff from "./components/stuff";

import "./App.css";

function App() {
  return (
    <main>
      <div
        className="container"
        style={{
          border: "1px red solid",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Stuff />
      </div>
    </main>
  );
}

export default App;
