import React, {Component} from 'react';

class AddCalories extends Component {
  constructor(props){
    super(props);
    this.state = {
      calorieIntake: 0
    }
    this.handleCalorieIntake = this.handleCalorieIntake.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleCalorieIntake(event){
    const total = parseInt(this.props.day.calorieIntake) + parseInt(event.target.value)
    const setZero = -parseInt(this.props.day.calorieIntake)
    if (total > 0) {
      return this.setState({calorieIntake: event.target.value})
    }
    this.setState({calorieIntake: setZero})
  }

  handleSubmit(event){
    event.preventDefault();
    let newCalorieIntake = parseInt(this.state.calorieIntake)
    let updateIntake = newCalorieIntake += parseInt(this.props.day.calorieIntake)
    let newIntake = {
      calorieIntake: updateIntake
    }
    this.props.onSubmit(this.props.day.id, newIntake, "/home")
  }

  render(){
    if (!this.props.day) {
      return "Loading..."
    }

    return (
      <React.Fragment>
      <div className="container">
      <h5>Calories: {this.props.day.calorieIntake}/2000</h5>
      <form onSubmit={this.handleSubmit}>
      <input type="number" placeholder="Add your calories here" name="calorieIntake" onChange={this.handleCalorieIntake}  />
      <button type="submit" className="btn-small mt-2 green lighten-2">Save</button>
      </form>
      </div>
      </React.Fragment>
    )

  }

}

export default AddCalories;
