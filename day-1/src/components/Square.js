import React from "react";

const Square = ({ colour, square }) => (
  <>
    <div
      style={{
        display: square ? "block" : "none",
        backgroundColor: colour ? colour : "red",
        margin: "2rem auto",
        width: "200px",
        height: "200px",
      }}
    ></div>
  </>
);

export default Square;
