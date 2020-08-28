import React, { Component } from "react";

export default class GodCounter extends Component {
	constructor(props) {
		super(props);
		this.state = {
			counter: 0,
		};

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		const { counter } = this.state;
		this.setState({
			counter: counter + 1,
		});
	}
	componentDidMount() {
		window.addEventListener("click", this.handleClick);
	}
	componentWillUnmount() {
		window.removeEventListener("click", this.handleClick);
	}

	render() {
		return (
			<div
				style={{
					width: "20px",
					height: "20px",
					backgroundColor: "#aaa",
				}}
			>
				<p>{this.state.counter}</p>
			</div>
		);
	}
}
