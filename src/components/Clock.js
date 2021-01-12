import React from "react"
import "./Clock.css"

class Clock extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			date: props.date,
			foo: props.zone || "Local Time"
		}
	}

	componentDidMount() {
		this.timerId = setInterval(this.tick, 1000) 
		// this.setState({ foo: "Hi!" })
	}

	componentDidUpdate() {
		console.log("Clock updated.")
	}

	componentWillUnmount() {
		clearInterval(this.timerId)
	}

	tick = () => {
		const newDate = this.state.date
		newDate.setSeconds(newDate.getSeconds() + 1)
		this.setState({ date: newDate })
		// this.state.date = new Date()
	}

	render() {
		return (
			<div className="container">
				<h1>{this.state.foo}</h1>
				<div className="clock-face">
					<div className="clock">
						<div className="hours-container">
							<div
								className="hours"
								style={{ transform: `rotateZ(${this.state.date.getHours() * 30 + this.state.date.getMinutes() / 2}deg)` }}
							></div>
						</div>
						<div className="minutes-container">
							<div className="minutes" style={{ transform: `rotateZ(${this.state.date.getMinutes() * 6}deg)` }}></div>
						</div>
						<div className="seconds-container">
							<div className="seconds" style={{ transform: `rotateZ(${this.state.date.getSeconds() * 6}deg)` }}></div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

// const Clock = props => {
// 	const { date } = props
// 	const seconds = date.getSeconds()
// 	const minutes = date.getMinutes()
// 	const hours = date.getHours()

// 	return (
// 		<div className="container">
// 			<div className="clock-face">
// 				<div className="clock">
// 					<div className="hours-container">
// 						<div
// 							className="hours"
// 							style={{ transform: `rotateZ(${hours * 30 + minutes / 2}deg)` }}
// 						></div>
// 					</div>
// 					<div className="minutes-container">
// 						<div className="minutes" style={{ transform: `rotateZ(${minutes * 6}deg)` }}></div>
// 					</div>
// 					<div className="seconds-container">
// 						<div className="seconds" style={{ transform: `rotateZ(${seconds * 6}deg)` }}></div>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	)
// }

export default Clock
