import React, { Component } from "react";

class CatchMeIfYouCan extends Component {
	constructor(props) {
		super(props);

		this.state = {
			top: 15,
			jump: this.props.jump,
			moved: false,
		};
		this.jump = this.jump.bind(this);
	}

	jump() {
		const { top, jump, moved } = this.state;
		const move = top + jump;
		this.setState({ top: move });
		this.setState({ moved: true });
	}
	render() {
		return (
			<button
				onMouseEnter={this.jump}
				className="jumper btn btn-warning"
				style={{
					top: this.state.top,
				}}
			>
				{this.state.moved ? "hehehe" : "clickMe!"}
			</button>
		);
	}
}

export default CatchMeIfYouCan;
