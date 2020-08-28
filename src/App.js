import React from "react";

import { HashRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
// import logo from './logo.svg';
import Stuff from "./components/Stuff";
import Events from "./components/events/Events";
import Tricksy from "./components/Tricksy";
import Fade from "./components/Fade";
import EventsTricksy from "./components/events/EventsTricksy";
import LifeCycleChallenges from "./components/lifecycle/LifeCycleChallenges";
// import Forms from "./components/forms/Forms";
import Routing from "./components/Routing";
import Prebuilt from "./components/prebuilt/Prebuilt";
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
				style={{
					justifyContent: "center",
					alignItems: "center",
					margin: "auto",
				}}
			>
				<Routing />

				{/* <Tricksy /> */}
				{/* <Events /> */}
				{/* <EventsTricksy /> */}
				{/* <LifeCycleChallenges /> */}
				{/* <Forms /> */}
				{/* <Prebuilt /> */}
			</div>
		</main>
	);
}

export default App;
