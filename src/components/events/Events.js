import Clicked from "./Clicked";
import Square from "./Square";
import ToggleText from "./ToggleText";
import StepCounter from "./StepCounter";
import CatchMeIfYoCan from "./CatchMeIfYouCan";
import RollCall from "./RollCall";

import React from "react";
const Events = () => (
	<>
		<div className="">
			<Clicked />
			<CatchMeIfYoCan jump={50} />
			<Square colour={"hotpink"} />
			<ToggleText initial="Hello" alternate="World!" />
			<StepCounter max={100} step={5} />
			<RollCall names={["Tom", "Will", "Oliver", "Marta"]} />
		</div>
	</>
);
export default Events;
