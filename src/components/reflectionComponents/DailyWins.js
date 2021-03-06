import React, {Component} from 'react';
import 'materialize-css/dist/css/materialize.min.css';

class DailyWins extends Component{
  constructor(props){
    super(props);
    this.state = {
      win1: '',
      win2: '',
      win3: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleWin1 = this.handleWin1.bind(this);
    this.handleWin2 = this.handleWin2.bind(this);
    this.handleWin3 = this.handleWin3.bind(this);
  }

  handleWin1(event){
    this.setState({win1: event.target.value})
  }

  handleWin2(event){
    this.setState({win2: event.target.value})
  }

  handleWin3(event){
    this.setState({win3: event.target.value})
  }

  handleSubmit(event){
    event.preventDefault();
    let dailyWins = {
      win1: this.state.win1,
      win2: this.state.win2,
      win3: this.state.win3
    }
    this.props.onSubmit(this.props.today.id, dailyWins, "/reflection")
  }

  render(){

    if (!this.props.today) {
      return "Loading..."
    }

    return (
      <div className="row">
    <form className="col s12" onSubmit={this.handleSubmit}>
      <div className="row">
        <div className="input-field col s12">
          <textarea id="textarea2" className="materialize-textarea" value={this.state.win1}
          onChange={this.handleWin1}></textarea>
          <label htmlFor="textarea2">What is your first win? Why is this a win?</label>
        </div>

        <div className="input-field col s12">
          <textarea id="textarea2" className="materialize-textarea" value={this.state.win2}
          onChange={this.handleWin2}></textarea>
          <label htmlFor="textarea2">What is your second win? Why is this a win?</label>
        </div>

        <div className="input-field col s12">
          <textarea id="textarea2" className="materialize-textarea" value={this.state.win3}
          onChange={this.handleWin3}></textarea>
          <label htmlFor="textarea2">What is your third win? Why is this a win?</label>
        </div>
      </div>
      <button className="waves-effect waves-light btn-small green lighten-2"><i className="material-icons right">archive</i>Archive</button>
    </form>
    </div>
  );
  }
  }

  export default DailyWins;
