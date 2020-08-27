import React, { Component } from "react";

class People extends Component {
	render() {
		const { names } = this.props;
		return (
			<section className="list-group">
				<ul onClick={() => console.log("Hello, World!")}>
					{!names ? (
						<li className="alert alert-warning" key={0}>
							{" "}
							"Nothing To See Here"
						</li>
					) : (
						names.map((name, index) => (
							<li key={index} className="list-group-item">
								{name}
							</li>
						))
					)}
				</ul>
			</section>
		);
	}
}

export default People;
