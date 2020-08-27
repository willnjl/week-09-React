import React, { Component } from "react";
import Button from "react-bootstrap/Button";

export default class CatchMe extends Component {
	constructor(props) {
		super(props);

		this.state = {
			top: 15,
			jump: 150,
			moved: false,
		};
		this.jump = this.jump.bind(this);
	}

	jump() {
		const { top, jump, moved } = this.state;
		const move = top + jump;
		this.setState({ top: move });
		this.setState({ moved: true });
	}
	render() {
		return (
			<Button
				onMouseEnter={this.jump}
				className="jumper btn btn-warning"
				style={{
					top: this.state.top,
				}}
			>
				{this.state.moved ? "hehehe" : "clickMe!"}
			</Button>
		);
	}
}
