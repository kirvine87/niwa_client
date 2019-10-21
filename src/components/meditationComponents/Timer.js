import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Countdown from 'react-countdown-now';

class Timer extends Component {
  constructor() {
    super();
    this.state = {
      time: {},
      seconds: 1800,
      meditated: false
    };

    this.timer = 0;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.countDown = this.countDown.bind(this);
  }

  //Turns seconds into minutes and hours  and creates time type objects
  secondsToTime(secs){
    let hours = Math.floor(secs / (60 * 60));

    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);

    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);

    let types = {
      "h": hours,
      "m": minutes,
      "s": seconds
    };
    return types;
  }

  componentDidMount() {
    let timeLeftVar = this.secondsToTime(this.state.seconds);
    this.setState({ time: timeLeftVar });
  }

  startTimer() {
    if (this.timer == 0 && this.state.seconds > 0) {
      this.timer = setInterval(this.countDown, 1000);
    }
  }

  handleSubmit(){
    let hasMeditated = {
      meditated: this.state.meditated
    }
    this.props.onSubmit(this.props.today.id, hasMeditated, "/meditation")
  }

  countDown() {
    // Remove one second, set state so a re-render happens.
    let seconds = this.state.seconds - 1;
    this.setState({
      time: this.secondsToTime(seconds),
      seconds: seconds,
    });

    // Check if if timer has reached 0.
    if (seconds == 0) {
      clearInterval(this.timer);
      this.state.meditated = true;
      this.handleSubmit();
    }
  }

  render() {
    return(
      <div>
        <button onClick={this.startTimer}>Start</button>
        {this.state.time.h} : {this.state.time.m} : {this.state.time.s}
      </div>
    );
  }
}


export default Timer;
