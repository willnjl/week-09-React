import React, { Component } from "react";

class LameGame extends Component {
	constructor(props) {
		super(props);

		this.state = {
			duration: () => Math.floor(Math.random() * 10000),
			time: 0,
			timerStart: false,
			status: ["Start", "Aim", "Fire", "Hit", "Miss"],
			index: 0,
		};

		this.start = this.start.bind(this);
		this.shoot = this.shoot.bind(this);
		this.timer = this.timer.bind(this);
	}

	timer() {
		const startTime = Date.now();
		const { time } = this.state;
		setInterval(() => {
			this.setState({
				time: Date.now() - startTime,
			});
		}, 10);
	}
	start() {
		const { duration, startTime, timeNow, status, index } = this.state;
		this.setState({
			index: (index + 1) % status.length,
		});
		const countdown = setTimeout(() => {
			this.setState({
				index: (this.state.index + 1) % this.state.status.length,
				timerStart: true,
			});
			this.timer();
		}, duration());
	}

	shoot() {
		const { duration, time, status, index, timerStart } = this.state;
		const score = time;
		this.setState({
			timerStart: false,
		});
	}

	render() {
		const { duration, time, status, index, timerStart } = this.state;
		const colour = timerStart || time !== 0 ? "orange" : "blue";
		return (
			<div
				style={{
					width: "300px",
					height: "300px",
					backgroundColor: colour,
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<div className="container">
					<h1>{status[index]}</h1>
					{timerStart || time > 0 ? <p> {Math.floor(time)}</p> : ""}
					{index === 0 ? (
						<button className={"btn btn-primary"} onClick={this.start}>
							Start
						</button>
					) : (
						""
					)}
					{index !== 0 ? (
						<button className={"btn btn-danger"} onClick={this.shoot}>
							Fire
						</button>
					) : (
						""
					)}
				</div>
			</div>
		);
	}
}

export default LameGame;
