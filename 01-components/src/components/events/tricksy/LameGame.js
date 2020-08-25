import React, { Component } from "react";

class LameGame extends Component {
	constructor(props) {
		super(props);

		this.state = {
			duration: () => Math.floor(Math.random() * 10000),
			score: 0,
			status: ["Start", "Aim", "Fire"],
			index: 0,
		};

		this.start = this.start.bind(this);
		this.shoot = this.shoot.bind(this);
	}
	start() {
		const { duration, score, status, index } = this.state;
		this.setState({
			index: (index + 1) % status.length,
		});
		return setTimeout(() => {
			this.setState({
				index: (this.state.index + 1) % this.state.status.length,
			});
		}, duration());
	}
	shoot() {
		const { duration, score, status, index } = this.state;
	}

	render() {
		const { duration, score, status, index } = this.state;
		console.log(index);
		return (
			<div
				style={{
					width: "300px",
					height: "300px",
					backgroundColor: "orange",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<div className="container">
					<h1>{status[index]}</h1>
					{index === 0 ? (
						<button className={"btn btn-primary"} onClick={this.start}>
							Start
						</button>
					) : (
						""
					)}
					{index !== 0 ? (
						<button className={"btn btn-danger"}>Fire</button>
					) : (
						""
					)}
				</div>
			</div>
		);
	}
}

export default LameGame;
