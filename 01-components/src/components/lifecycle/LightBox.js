import React, { Component } from "react";

export default class LightBox extends Component {
	constructor(props) {
		super(props);

		this.state = {
			lightBox: false,
		};

		this.handleShow = this.handleShow.bind(this);
		this.handleHide = this.handleHide.bind(this);
	}

	handleShow(e) {
		this.setState({ lightBox: true });
		e.stopPropagation();
	}

	handleHide() {
		this.setState({ lightBox: false });
	}

	componentDidMount() {
		window.addEventListener("click", this.handleHide);
	}

	// remove window event listener when
	// component is removed
	componentWillUnmount() {
		window.removeEventListener("click", this.handleHide);
	}
	handlehide() {}

	render() {
		let imgStyling = this.state.lightBox ? "LBBig" : "LBSmall";
		return (
			<div className={this.state.lightBox ? "bgDark" : {}}>
				<img
					onClick={this.handleShow}
					src={this.props.src}
					className={"img-thumbnail " + imgStyling}
				/>
			</div>
		);
	}
}
