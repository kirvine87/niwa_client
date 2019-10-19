import React, {Component} from 'react';

class JournalEntry extends Component{
  constructor(props){
    super(props);
    this.state = {
      journalEntry: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleJournaling = this.handleJournaling.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();
    let newJournalEntry = {
      journalEntry: this.state.journalEntry
    }
    this.props.onSubmit(this.props.today.id, newJournalEntry, "/journal")
  }

  handleJournaling(event){
    this.setState({journalEntry: event.target.value})
  }

  render(){

    return (
      <div className="row">
    <form className="col s12" >
      <div className="row">
        <div className="input-field col s12">
          <textarea id="textarea1" className="materialize-textarea" value={this.state.journalEntry}
          onChange={this.handleJournaling}></textarea>
          <label htmlFor="textarea1">Write your words</label>
          <button onSubmit={this.handleSubmit}>Archive</button>
        </div>
      </div>
    </form>
  </div>
);
  }
}

export default JournalEntry;
