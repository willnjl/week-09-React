import Clicked from "./events/Clicked";
import Square from "./events/Square";
import ToggleText from "./events/ToggleText";
import StepCounter from "./events/StepCounter";
import CatchMeIfYoCan from "./events/CatchMeIfYouCan";

import React from "react";
const Events = () => (
	<>
		<div className="">
			<Clicked />
			<CatchMeIfYoCan jump={50} />
			<Square colour={"hotpink"} />
			<ToggleText initial="Hello" alternate="World!" />
			<StepCounter max={100} step={5} />
		</div>
	</>
);
export default Events;
