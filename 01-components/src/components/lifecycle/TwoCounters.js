import React, { Component } from "react";

export default class TwoCounters extends Component {
	constructor() {
		super();
		this.state = {
			value1: 0,
			value2: 0,
		};
		this.handle1 = this.handle1.bind(this);
		this.handle2 = this.handle2.bind(this);
	}

	componentDidMount() {
		const { value2, value1 } = this.state;
		document.title = value1 + value2;
	}

	componentDidUpdate() {
		const { value2, value1 } = this.state;
		document.title = value1 + value2;
	}
	handle1() {
		const { value1 } = this.state;
		this.setState({
			value1: value1 + 1,
		});
	}
	handle2() {
		const { value2 } = this.state;
		this.setState({
			value2: value2 + 1,
		});
	}

	render() {
		const { value1, value2 } = this.state;
		return (
			<div className="jumbotron">
				<p>
					<button onClick={this.handle1} className="btn btn-lg btn-danger">
						+
					</button>
					<span className="alert alert-danger mr-2 ml-2">{value1}</span>
				</p>
				<p>
					<button onClick={this.handle2} className="btn btn-lg btn-success">
						+
					</button>
					<span className="alert alert-success mr-2 ml-2">{value2}</span>
				</p>
			</div>
		);
	}
}
