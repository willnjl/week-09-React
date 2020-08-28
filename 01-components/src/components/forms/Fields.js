import React, { Component } from "react";
import Button from "react-bootstrap/Button";

export default class Fields extends Component {
	constructor(props) {
		super(props);

		this.state = {
			values: props.fields.map(() => ""),
			submitted: false,
		};

		this.handleClick = this.handleClick(this);
	}

	handleChange(e) {
		const values
	}

	render() {
		const { fields } = this.props;
		return (
			<form>
				{fields.map((field, i) => {
					return (
						<div className="form-group" key={i}>
							<label htmlFor={field}>{field}</label>
							<input name={field} type="text" onChange={(e) => this.handleChange(e)} />
						</div>
					);
				})}
				<Button onSubmit={(e) => this.handleClick(e)}>Submit</Button>
			</form>
		);
	}
}
