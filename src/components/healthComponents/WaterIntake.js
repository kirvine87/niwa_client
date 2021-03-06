import React, {Component} from 'react';

class WaterIntake extends Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNegativeSubmit = this.handleNegativeSubmit.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();
    let oldWaterIntake = parseInt(this.props.today.waterIntake)
    let updateIntake = oldWaterIntake + 1
    let newIntake = {
      waterIntake: updateIntake
    }
    this.props.onSubmit(this.props.today.id, newIntake, "/health");
  }

  handleNegativeSubmit(event){
    event.preventDefault();
    if (this.props.today.waterIntake === 0) {
      return null;
    }
    let updateIntake = parseInt(this.props.today.waterIntake) - 1
    let newIntake = {
      waterIntake: updateIntake
    }
    this.props.onSubmit(this.props.today.id, newIntake, "/health");
  }

  render(){
    if (!this.props.today) {
      return "Loading..."
    }
    return (
      <div>
      <p><strong>Total water for today</strong>: {this.props.today.waterIntake} Cups(330ml)</p>
      <p>Add your water intake:</p>

      <form onSubmit={this.handleSubmit} >
        <button type="submit" className="btn-floating btn-small light green lighten-2" name="waterIntake">+</button>
      </form>

      <form onSubmit={this.handleNegativeSubmit} >
        <button type="submit" className="btn-floating btn-small waves-effect waves-light green lighten-2" name="waterIntake">-</button>
      </form>

      </div>
    )
  }

}

export default WaterIntake;
