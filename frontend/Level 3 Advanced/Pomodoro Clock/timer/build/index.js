
class PomodoroTimer extends React.Component {

	constructor() {
		//every time you use a state
		super();
		this.state = { timeElapsed: 0 };
	}

	totalTime(a, b) {
		return a + b;
	}

	componentDidMount() {
		//console.log(new Date());
		this.interval = setInterval(this.elapsedTime.bind(this), 1000);
		this.setState({ start: new Date() });
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	elapsedTime() {

		var timeElapsed = Math.floor((new Date() - this.state.start) / 1000);

		this.setState({ timeElapsed: timeElapsed });

		//if timeElapsed = 25 minutes -> then alert
		if (this.state.timeElapsed >= this.props.workingTime * 60) {
			clearInterval(this.interval);
			alert("Time for a break!");
		}
	}

	render() {

		return React.createElement(
			"div",
			null,
			"This timer runs for ",
			this.props.workingTime,
			" minutes, followed by a rest of ",
			this.props.restingTime,
			" minutes.",
			React.createElement("br", null),
			"For a total time of ",
			this.totalTime(this.props.workingTime, this.props.restingTime),
			" minutes.",
			React.createElement("br", null),
			"There are ",
			this.state.timeElapsed,
			" seconds elapsed."
		);
	} //end render
} //end class


ReactDOM.render(React.createElement(PomodoroTimer, { workingTime: 1, restingTime: 1 }), document.getElementById('app'));