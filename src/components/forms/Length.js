import React, { Component } from "react";

export default class Length extends Component {
	constructor(props) {
		super(props);

		this.state = {
			inputLength: 0,
		};

		this.handleInput = this.handleInput.bind(this);
	}

	handleInput(e) {
		this.setState({
			inputLength: e.currentTarget.value.length,
		});
	}

	render() {
		return (
			<>
				<div>
					<form action="" className={"form"}>
						<input
							onChange={(e) => this.handleInput(e)}
							type="text"
							className={"form-text"}
						/>
					</form>
					<p>{this.state.inputLength}</p>
				</div>
			</>
		);
	}
}
