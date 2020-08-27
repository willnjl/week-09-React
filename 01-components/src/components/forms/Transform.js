import React, { Component } from "react";

export default class Transform extends Component {
	constructor(props) {
		super(props);

		this.state = {
			value: "",
		};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		const target = e.currentTarget.value;
		this.setState({
			value: +target,
		});
	}
	render() {
		const { transform } = this.props;
		return (
			<>
				<input type="text" onChange={(e) => this.handleChange(e)} />
				<p>{transform(this.state.value)}</p>
			</>
		);
	}
}
