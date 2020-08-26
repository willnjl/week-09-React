import React, { Component } from "react";

export default class Password extends Component {
	constructor(props) {
		super(props);

		this.state = {
			colours: ["", "red", "orange", "green"],
			length: 0,
			i: 0,
		};

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		const { i } = this.state;
		let input = e.currentTarget.value.length;
		this.setState({
			length: input,
		});
		if (input === 0)
			if (input > 0) {
				this.setState({
					i: 2,
				});
			}

		if (input < 16 && input > 9) {
			this.setState({
				i: 2,
			});
		}
		if (input > 16) {
			this.setState({
				i: 3,
			});
		}
	}

	render() {
		return (
			<div>
				<form action="" className={"form"}>
					<input
						onChange={(e) => this.handleChange(e)}
						type="text"
						className={"form-text"}
						style={{ backgroundColor: this.state.colours[this.state.i] }}
					/>
				</form>
				<p>{this.state.length}</p>
			</div>
		);
	}
}
