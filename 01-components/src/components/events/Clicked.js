import React, { Component } from "react";

class Clicked extends Component {
	constructor(props) {
		super(props); //make sure you allways add this

		this.state = {
			clicked: false,
		};
		this.handleClick = this.handleClick.bind(this);
	} //set up stats as plain JS objext

	handleClick() {
		let { clicked } = this.state;
		clicked = true;
		this.setState({ clicked });
		console.log(this.state.clicked);
	}

	render() {
		const clicked = this.state.clicked;
		return (
			<p className="" onClick={this.handleClick}>
				{clicked ? "Clicked" : "Not Clicked"}
			</p>
		);
	}
}

export default Clicked;
