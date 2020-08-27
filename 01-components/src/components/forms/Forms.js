import React from "react";
import Length from "./Length";
import Password from "./Password";
import TempConverter from "./TempConverter";
import List from "./List";
import Tricksy from "./tricksy";
import Transform from "./Transform";

let fields = ["First Name", "Last Name", "Email"];

export default function Forms() {
	return (
		<>
			{/* <Length /> */}
			{/* <Password /> */}
			{/* <TempConverter /> */}
			{/* <List /> */}
			<Transform transform={(n) => n * n} />
			<Transform transform={(n) => n + n} />
			{/* <Tricksy fields={fields} /> */}
		</>
	);
}
