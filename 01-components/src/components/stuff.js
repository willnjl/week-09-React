import React from "react";
import Header from "./Header.js";
import Paragraph from "./Paragraph.js";
import Square from "./Square.js";
import People from "./People.js";

const Stuff = () => (
  <React.Fragment>
    <Header>Hello Children!</Header>
    <Paragraph>"Lorem Impsom and all that..."</Paragraph>
    <Square square={true} colour="blue" />
    <People names={["Rohan", "Tom", "Zack", "G", "Dean"]} />
  </React.Fragment>
);
export default Stuff;
