import React, { Component } from "react";

class Header extends Component {
	render() {
		let { children } = this.props;
		return (
			<header className="alert alert-primary">
				<h1>{children}</h1>
			</header>
		);
	}
}

export default Header;
