import React from "react";
import Header from "./Header.js";
import Paragraph from "./Paragraph.js";
import Square from "./Square.js";
import People from "./People.js";

const Stuff = () => (
  <React.Fragment>
    <Header text="Hello, World!" />
    <Paragraph message="Lorem Impsom and all that..." />
    <Square square={true} colour="blue" />
    <People names={["Rohan", "Tom", "Zack", "G", "Dean"]} />
  </React.Fragment>
);
export default Stuff;
