import React from "react";
import Header from "./Header.js";
import Paragraph from "./Paragraph.js";
import Square from "./Square.js";
import People from "./People.js";

const Stuff = () => (
  <React.Fragment>
    <Header text="Hello, World!" />
    <Paragraph />
    <Square />
    <People />
  </React.Fragment>
);
export default Stuff;
