import React from "react";
// import logo from './logo.svg';
import Functional from "./components/functional";
import Events from "./components/events";
import Tricksy from "./components/Tricksy";
import Fade from "./components/Fade";

import "./App.css";

const products = [
	{ name: "Coffee", price: 2.1 },
	{ name: "Bananas", price: 3.5 },
	{ name: "Milk", price: 250.65 },
	{ name: "The Great Milk Shortage by Simon Schama", price: 12.99 },
];

function App() {
	return (
		<main>
			<div
				className="container"
				style={{ alignItems: "center", justifyContent: "center" }}
			>
				{/* <Fade time={"10s"}>
					<Functional products={products} />
				  <Tricksy />
				</Fade> */}
				<Events />
			</div>
		</main>
	);
}

export default App;
