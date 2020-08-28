import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Progress from "react-bootstrap/ProgressBar";

export default class ProgressChallenge extends Component {
	constructor(props) {
		super(props);

		this.state = {
			val: 0,
		};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e) {
		this.setState({
			val: this.state.val + 10,
		});
	}
	render() {
		return (
			<div style={{ margin: "100px auto", width: "50%" }}>
				<Progress now={this.state.val} />
				<Button onClick={(e) => this.handleClick(e)}>Progress</Button>
			</div>
		);
	}
}
