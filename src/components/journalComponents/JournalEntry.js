import React, {Component} from 'react';

class JournalEntry extends Component{

  componentDidMount() {
    M.AutoInit();
  }

  render(){
    return (
      <div class="row">
    <form class="col s12">
      <div class="row">
        <div class="input-field col s12">
          <textarea id="textarea1" class="materialize-textarea"></textarea>
          <label for="textarea1">Textarea</label>
        </div>
      </div>
    </form>
  </div>
    )
  }
}

export default JournalEntry;
