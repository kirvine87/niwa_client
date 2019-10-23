import React, {Component} from 'react';

class Timer extends Component {
  constructor() {
    super();
    this.state = {
      time: {},
      seconds: 1800,
      meditated: false,
      stopped: true,
      start: "Start"
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

  //start the timer + change
  startTimer() {
    if (this.state.stopped === true){
      this.setState({start: "Stop"});
      document.getElementById("circle").className += " pulse";
      // document.getElementById("btn-floating btn-large").classList.add("pulse");
    // if (this.timer == 0 && this.state.seconds > 0) {
      this.state.stopped = false;
      this.timer = setInterval(this.countDown, 1000);
    // }
    } else {
      if (this.state.stopped === false){
        document.getElementById("circle").className = "btn-floating btn-large #81c784 green lighten-2";
        this.setState({start: "Start"});
        this.state.stopped = true;
        clearInterval(this.timer);
      }
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
    if (this.state.stopped === false){
    let seconds = this.state.seconds - 1;
    this.setState({
      time: this.secondsToTime(seconds),
      seconds: seconds,
    });

    // Check if timer has reached 0.
    if (seconds === 0) {
      clearInterval(this.timer);
      this.state.meditated = true;
      this.handleSubmit();
    }
  }
}

  render() {
    return(
      <div className="circle">
        <button onClick={this.startTimer} id="circle" className="btn-floating btn-large #81c784 green lighten-2">
        <i className="material-icons"></i>
        {this.state.time.m} : {this.state.time.s} <br /> {this.state.start}</button>
      </div>
    );
  }
}


export default Timer;
