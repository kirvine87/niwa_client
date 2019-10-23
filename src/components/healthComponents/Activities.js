import React, {Component} from 'react';

class Activities extends Component{
  constructor(props){
    super(props);
    this.state = {
      exercised: this.props.day.exercised,
      meditated: this.props.day.meditated
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleExercised = this.handleExercised.bind(this)
    this.handleMeditated = this.handleMeditated.bind(this)
  }

  handleSubmit(event){
    event.preventDefault();
    let activities = {
      exercised: this.state.exercised,
      meditated: this.state.meditated
    }
    this.props.onSubmit(this.props.day.id, activities, "/health");
  }

  handleExercised(event){
    this.setState({exercised: this.stringToBool(event.target.value)})
  }

  handleMeditated(event){
    this.setState({meditated: this.stringToBool(event.target.value)})
  }

  stringToBool(val) {
    return (val + '').toLowerCase() === 'true';
  }

  render(){
    if (!this.props.day) {
      return "Loading..."
    }

    return (
      <div className="container">
      <p> Have you... </p>
      <form onSubmit={this.handleSubmit} >
      <div>
      <label>
      <input type="checkbox" name="exercised" value={!this.state.exercised} checked={this.state.exercised} onChange={this.handleExercised} />
      <span> exercised? </span>
      </label>
      </div>
      <div>
      <label>
      <input type="checkbox" name="meditated" value={!this.state.meditated} checked={this.state.meditated} onChange={this.handleMeditated} />
      <span> meditated? </span>
      </label>
      </div>
      <button type="submit" className="btn-small mt-2 green lighten-2" name="save">Save</button>
      </form>
      </div>
    )
  }

}

export default Activities
