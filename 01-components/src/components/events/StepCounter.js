import React, { Component } from "react";

class StepCounter extends Component {
	constructor(props) {
		super(props);

		this.state = {
			max: this.props.max,
			min: 0,
			step: this.props.step,
			current: 0,
		};

		this.stepInc = this.stepInc.bind(this);
		this.stepDec = this.stepDec.bind(this);
	}

	stepInc() {
		const { max, step, current } = this.state;
		if (current + step <= max) {
			this.setState({ current: current + step });
		}
	}
	stepDec() {
		const { min, step, current } = this.state;
		if (current - step >= min) {
			this.setState({ current: current - step });
		}
	}
	render() {
		const { current } = this.state;
		return (
			<>
				<div className="border">
					<p className="lead">{current}</p>
					<button onClick={this.stepInc} className="btn btn-primary">
						+
					</button>
					<button onClick={this.stepDec} className="btn btn-secondary">
						-
					</button>
				</div>
			</>
		);
	}
}

export default StepCounter;
