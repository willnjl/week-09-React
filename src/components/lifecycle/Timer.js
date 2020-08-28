import React, { Component } from "react";

export default class Timer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			time: this.props.start,
		};
	}

	render() {
		return (
			<div className={"jumbotron"}>
				<h1 className={""}>{this.state.time} </h1>
				<button onClick={this.handleClick} className={"btn btn-secondary"}>
					Start
				</button>
			</div>
		);
	}
}
