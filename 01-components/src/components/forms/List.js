import React, { Component } from "react";

export default class List extends Component {
	constructor(props) {
		super(props);

		this.state = {
			items: [],
			userInput: "",
		};

		this.handleClick = this.handleClick.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		const input = e.currentTarget.value;
		this.setState({
			userInput: input,
		});
	}
	handleClick(e) {
		e.preventDefault();
		const { items, userInput } = this.state;
		this.setState({
			items: [...items, userInput],
		});
	}
	render() {
		return (
			<div>
				<ul className={"list-group"}>
					{this.state.items.map((item, i) => {
						return (
							<li key={i} className={"list-group-item"}>
								{item}
							</li>
						);
					})}
				</ul>
				<form onSubmit={(e) => this.handleClick(e)}>
					<input type="text" onChange={(e) => this.handleChange(e)} />
					<button className={"btn btn-secondary"}>Add</button>
				</form>
			</div>
		);
	}
}
