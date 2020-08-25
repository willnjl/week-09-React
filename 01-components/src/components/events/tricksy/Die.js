import React, { Component } from "react";

class Die extends Component {
	constructor(props) {
		super(props);

		this.state = {
			sides: this.props.sides,
			result: "?",
		};

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		const { sides, result } = this.state;
		this.setState({
			result: Math.ceil(Math.random() * sides),
		});
	}
	render() {
		return (
			<div
				style={{
					width: "200px",
					height: "200px",
					backgroundColor: "orange",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
				onClick={this.handleClick}
			>
				<h1>{this.state.result}</h1>
			</div>
		);
	}
}

export default Die;
