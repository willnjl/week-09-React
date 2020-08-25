import Clicked from "./events/Clicked";
import Square from "./events/Square";

import React from "react";
const Events = () => (
	<>
		<div className="container">
			<Clicked />
			<Square colour={"blue"} />
		</div>
	</>
);
export default Events;
