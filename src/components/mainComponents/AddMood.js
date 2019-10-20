import React, {Component} from 'react';

class AddMood extends Component {
  constructor(props){
    super(props);
    this.state = {
      rating: 0,
      tag: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRating = this.handleRating.bind(this);
    this.handleTag = this.handleTag.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();
    let newMood = {
      time: Date.now(),
      rating: this.state.rating,
      tag: this.state.tag,
      day: this.props.day
    }
    this.props.onSubmit(newMood, "/")
  }

  handleRating(event){
    this.setState({rating: event.target.value})
  }

  handleTag(event){
    this.setState({tag: event.target.value})
  }

  render() {
    if (!this.props.day) {
      return "Loading..."
    }

    return (
      <React.Fragment>
      <div>
      <form onSubmit={this.handleSubmit}>
      <button type="number" name="Mood" onChange={this.handleRating} value="1">Awful</button>
      <button type="number" name="Mood" onChange={this.handleRating} value="2">Sad</button>
      <button type="number" name="Mood" onChange={this.handleRating} value="3">Okay</button>
      <button type="number" name="Mood" onChange={this.handleRating} value="4">Happy</button>
      <button type="number" name="Mood" onChange={this.handleRating} value="5">Amazing</button>
      <input type="text" placeholder="Tag" name="MoodTag" onChange={this.handleTag}  />
      <button type="submit">Save</button>
      </form>
      </div>
      </React.Fragment>
    )
  }


}

export default AddMood;
