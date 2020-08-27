import React, { Component } from "react";

export default class Tricksy extends Component {
	constructor(props) {
		super(props);

		this.state = {
			fields: this.props.fields,
			fillLog: [],
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e) {
		const target = e.currentTarget.value;
	}

	handleSubmit(e) {
		e.preventDefault();
		console.log(e);
		// const { fields, fillLog } = this.state;
		// const mapped = fields.map((field, i) => {
		// 	return field.value.length() > 0;
		// });
		// console.log(mapped);
	}
	render() {
		return (
			<form onSubmit={(e) => this.handleSubmit(e)}>
				{this.state.fields.map((label, i) => {
					return (
						<div className={"form-group"} key={i}>
							<label htmlFor={label} key={label}>
								{label}
							</label>
							<input
								key={label + i}
								name={label}
								type="text"
								onChange={(e) => this.handleChange(e)}
							/>
						</div>
					);
				})}
				<button>Submit</button>
			</form>
		);
	}
}
