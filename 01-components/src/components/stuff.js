import React from "react";
import Header from "./Header.js";
import Paragraph from "./Paragraph.js";
import Square from "./Square.js";
import People from "./People.js";
import Basket from "./Basket";

const Stuff = ({ products }) => (
  <React.Fragment>
    <Header>Hello Children!</Header>
    <Paragraph>"Lorem Impsom and all that..."</Paragraph>
    <Square square={true} colour="blue" />
    <People names={["Rohan", "Tom", "Zack", "G", "Dean"]} />
    <Basket items={products} />
  </React.Fragment>
);
export default Stuff;
