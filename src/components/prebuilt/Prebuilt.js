import React from "react";
import Container from "react-bootstrap/Container";
import CatchMe from "./CatchMe";
import ProgressChallenge from "./ProgressChallenge";
import Password from "./Password";
import ListChallenge from "./ListChallenge";

export default function Prebuilt() {
	return (
		<Container>
			<Password />
			<CatchMe />
			<ProgressChallenge />
			<ListChallenge />
		</Container>
	);
}
