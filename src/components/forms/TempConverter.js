import React, { Component } from "react";

export default class TempConverter extends Component {
	constructor(props) {
		super(props);

		this.state = {
			F: 0,
			C: 0,
		};
		this.handleChangeCelcius = this.handleChangeCelcius.bind(this);
		this.handleChangeFahrenheit = this.handleChangeFahrenheit.bind(this);
	}

	handleChangeCelcius(e) {
		const input = e.currentTarget.value;
		const convertToFahrenheit = (n) => (n * 9) / 5 + 32;
		this.setState({
			F: convertToFahrenheit(input),
			C: input,
		});
	}

	handleChangeFahrenheit(e) {
		const input = e.currentTarget.value;
		const convertToCelsius = (n) => (n - 32) * (5 / 9);
		this.setState({
			C: convertToCelsius(input),
			F: input,
		});
	}
	render() {
		return (
			<div>
				<label for="farenheit"> farenheit</label>
				<input
					name="farenheit"
					onChange={(e) => this.handleChangeFahrenheit(e)}
					value={this.state.F}
				/>
				<label for="celcius"> celcius</label>
				<input
					name="celcius"
					onChange={(e) => this.handleChangeCelcius(e)}
					value={this.state.C}
				/>
			</div>
		);
	}
}
