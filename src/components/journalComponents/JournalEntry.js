import React, {Component} from 'react';

class JournalEntry extends Component{
  constructor(props){
    super(props);
    this.state = {
      journalEntry: ''
    }

    this.handleJournaling = this.handleJournaling.bind(this);
  }



  handleJournaling(event){
    console.log('*****', event.target.value);
    this.setState({journalEntry: event.target.value})
  }

  WordCount(str) {
    return str.split(" ").length;
  }

  render(){

    let count = 0,
        length = this.state.value?this.state.value.length:0;

    return (
      <div className="row">
    <form className="col s12">
      <div className="row">
        <div className="input-field col s12">
          <textarea id="textarea1" className="materialize-textarea" data-length="5" value={this.state.journalEntry}
          onChange={(event)=>this.handleJournaling(event)}>{this.state.value}</textarea>
          <div>Count: {length}</div>
          <div>this.state.value: {this.state.value}</div>
          <label htmlFor="textarea1">Write your words</label>
          <button>Archive</button>
        </div>
      </div>
    </form>
  </div>
);
  }
}

// ReactDOM.render(
//   <WordCount />,
//   document.getElementById('root')
// );

export default JournalEntry;
