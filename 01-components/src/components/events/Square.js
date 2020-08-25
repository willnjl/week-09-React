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
		if (active === false) {
			this.setState({ active: true });
		} else {
			this.setState({ active: false });
		}
	}
	render() {
		const styling = {
			display: "block",
			backgroundColor: this.state.active ? this.props.colour : "red",
			margin: "2rem auto",
			width: "200px",
			height: "200px",
		};

		return <div onClick={this.handleClick} style={styling}></div>;
	}
}

export default Square;
