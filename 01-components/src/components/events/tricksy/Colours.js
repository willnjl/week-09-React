import React, { Component } from "react";

export default class Colours extends Component {
	constructor(props) {
		super(props);

		this.state = {
			colours: ["#C14412", "#EBB31A", "#8F5318", "#009EAD", "#395967"],
			i: 0,
		};

		this.handleClick = this.handleClick.bind(this);
	}
	handleClick() {
		const { colours, i } = this.state;

		this.setState({
			i: (i + 1) % colours.length,
		});
	}
	render() {
		const { colours, i } = this.state;
		return (
			<div
				onClick={this.handleClick}
				style={{ width: "200px", height: "200px", backgroundColor: colours[i] }}
			></div>
		);
	}
}
