import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";

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
		const colours = ["", "danger", "warning", "success"];
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

	alertGen(col) {
		const output = ["", "Shit", "Awful", "Acceptable"];
		if (col >= 16) {
			return output[3];
		} else if (col < 16 && col > 9) {
			return output[2];
		} else if (col > 0) {
			return output[1];
		} else if (col === 0) {
			return output[0];
		}
	}
	render() {
		return (
			<>
				<Form.Control
					type="password"
					style={{ width: "18rem", margin: "auto" }}
					onChange={(e) => this.handleChange(e)}
				/>
				<Alert
					variant={this.colourSelect(this.state.length)}
					transition={this.state.length === 0}
				>
					<p>Your Password is {this.alertGen(this.state.length)}</p>
				</Alert>
			</>
		);
	}
}
