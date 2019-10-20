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
    let url = "http://localhost:8080/api/days/" + this.props.day.id
    event.preventDefault();
    let newMood = {
      time: new Date(),
      rating: this.state.rating,
      tag: this.state.tag,
      day: url
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
      <form onSubmit={this.handleSubmit}>
      <div className="form-check">
          <label>
            <input type="radio" name="mood" value="1" onChange={this.handleRating} className="form-check-input" />
            <span> Awful </span>
          </label>
        </div>

        <div className="form-check">
            <label>
              <input type="radio" name="mood" value="2" onChange={this.handleRating} className="form-check-input" />
              <span> Sad </span>
            </label>
          </div>

        <div className="form-check">
          <label>
            <input type="radio" name="mood" value="3" onChange={this.handleRating} className="form-check-input" />
            <span> Okay </span>
          </label>
        </div>

        <div className="form-check">
            <label>
              <input type="radio" name="mood" value="4" onChange={this.handleRating} className="form-check-input" />
              <span> Good </span>
            </label>
          </div>

        <div className="form-check">
          <label>
            <input type="radio" name="mood" value="5" onChange={this.handleRating} className="form-check-input" />
            <span> Amazing </span>
          </label>
        </div>

        <div className="form-check">
            <label>
              <input type="text" name="tag" onChange={this.handleTag} className="form-check-input" />
            </label>
          </div>

        <div className="form-group">
          <button className="btn btn-primary mt-2" type="submit" >
            Save
          </button>
        </div>
        </form>
      </React.Fragment>
    )
  }

}

export default AddMood;
