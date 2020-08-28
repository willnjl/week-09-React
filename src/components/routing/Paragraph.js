import React, { Component } from "react";

const Paragraph = ({ children }) => {
	return <p>{children ? children : "Hello World"}</p>;
};

export default Paragraph;
