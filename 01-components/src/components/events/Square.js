import React, { Component } from "react";

class Square extends Component {
	constructor(props) {
		super(props);

		this.state = {
			active: false,
		};

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		let { active } = this.state;

		this.setState({ active: !active });
	}
	render() {
		const styling = {
			display: "block",
			backgroundColor: this.state.active ? this.props.colour : "green",
			margin: "2rem auto",
			width: "200px",
			height: "200px",
		};

		return <div onClick={this.handleClick} style={styling}></div>;
	}
}

export default Square;
