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

  label(){
    if (this.props.today.journalEntry){
      return <label htmlFor="textarea1"></label>
    } else {
      return <label htmlFor="textarea1">Write your words</label>
    }
  }

  render(){

    if (!this.props.today) {
      return "Loading..."
    }

    let wordCount = 0
    if(this.state.journalEntry.length !== 0){
      wordCount = this.state.journalEntry.split(" ").length;
    }

    return (
      <div className="row">
      <h5>Journal Entry:</h5>
    <form className="col s12" onSubmit={this.handleSubmit}>
      <div className="row">
        <div className="input-field col s12" >
          <textarea id="textarea1" className="materialize-textarea" value={this.state.journalEntry}
          onChange={this.handleJournaling}></textarea>
          <label htmlFor="textarea1"></label>
          <div>{wordCount}/500</div>
          <button className="waves-effect waves-light btn-small green lighten-2"><i className="material-icons right">archive</i>Archive</button>
        </div>
      </div>
    </form>
  </div>
  );
  }
}

export default JournalEntry;
