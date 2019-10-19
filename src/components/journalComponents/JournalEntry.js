import React, {Component} from 'react';

class JournalEntry extends Component{
  constructor(props){
    super(props);
    this.state = {
      journalEntry: ''
    }
  }

  render(){
    return (
      <div className="row">
    <form className="col s12">
      <div className="row">
        <div className="input-field col s12">
          <textarea id="textarea1" className="materialize-textarea" value={this.state.journalEntry}></textarea>
          <label htmlFor="textarea1">Write your words</label>
        </div>
      </div>
    </form>
  </div>
    )
  }
}

export default JournalEntry;
