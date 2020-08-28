import React, { Component } from "react";

class RollCall extends Component {
	constructor(props) {
		super(props);

		this.state = {
			i: 0,
		};

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		const { i } = this.state;
		const { names } = this.props;

		const calc = i + 1 < names.length ? i + 1 : 0;

		this.setState({ i: calc });
	}
	render() {
		const { names } = this.props;
		const { i } = this.state;
		return (
			<>
				<div className="border">
					<p>{names[i]}</p>
					<button onClick={this.handleClick} className={"btn btn-dark"}>
						Cycle
					</button>
				</div>
			</>
		);
	}
}

export default RollCall;
