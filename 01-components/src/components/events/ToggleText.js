import React, { Components, Component } from "react";
class ToggleText extends Component {
	constructor(props) {
		super(props);

		this.state = {
			toggle: false,
		};
		this.toggler = this.toggler.bind(this);
	}

	toggler() {
		const { toggle } = this.state;
		this.setState({ toggle: !toggle });
	}
	render() {
		const { initial, alternate } = this.props;

		return (
			<div>
				<p className="lead">{!this.state.toggle ? initial : alternate}</p>
				<button className="btn btn-danger" onClick={this.toggler}>
					{" "}
					Click Me!
				</button>
			</div>
		);
	}
}

export default ToggleText;
