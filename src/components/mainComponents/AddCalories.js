import React, {Component} from 'react';
import Request from '../../helpers/request';

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
    this.setState({calorieIntake: event.target.value})
  }

  handleSubmit(event){
    event.preventDefault();
    let newCalorieIntake = parseInt(this.state.calorieIntake)
    let updateIntake = newCalorieIntake += parseInt(this.props.day.calorieIntake)
    let newIntake = {
      calorieIntake: updateIntake
    }
    this.props.onSubmit(this.props.day.id, newIntake, "/")
  }

  render(){
    if (!this.props.day) {
      return "Loading..."
    }

    return (
      <React.Fragment>
      <h5>Calories: {this.props.day.calorieIntake}/2000</h5>
      <div>
      <form onSubmit={this.handleSubmit}>
      <input type="number" placeholder="Calorie Intake" name="calorieIntake" onChange={this.handleCalorieIntake}  />
      <button type="submit">Save</button>
      </form>
      </div>
      </React.Fragment>
    )

  }

}

export default AddCalories;
