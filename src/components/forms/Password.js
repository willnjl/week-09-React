import React, { Component } from "react";

export default class Password extends Component {
	constructor(props) {
		super(props);

		this.state = {
			length: 0,
		};

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		let input = e.currentTarget.value.length;
		this.setState({
			length: input,
		});
	}

	colourSelect(length) {
		const colours = ["", "red", "orange", "green"];
		if (length >= 16) {
			return colours[3];
		} else if (length < 16 && length > 9) {
			return colours[2];
		} else if (length > 0) {
			return colours[1];
		} else if (length === 0) {
			return colours[0];
		}
	}

	render() {
		const colours = ["", "red", "orange", "green"];

		return (
			<div>
				<form action="" className={"form"}>
					<input
						onChange={(e) => this.handleChange(e)}
						type="text"
						className={"form-text"}
						style={{
							backgroundColor: this.colourSelect(this.state.length),
						}}
					/>
				</form>
				<p> {this.colourSelect(this.state.length)}</p>

				<div></div>
			</div>
		);
	}
}
