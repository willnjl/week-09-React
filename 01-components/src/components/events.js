import Clicked from "./events/Clicked";
import Square from "./events/Square";
import ToggleText from "./events/ToggleText";

import React from "react";
const Events = () => (
	<>
		<div className="container-fluid">
			<Clicked />
			<Square colour={"hotpink"} />
			<ToggleText initial="Hello" alternate="World!" />
		</div>
	</>
);
export default Events;
