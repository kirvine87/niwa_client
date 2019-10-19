import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

const JournalContainer = (props) => {
  render(){
  return (
    <Router>
      <React.Fragment>
        <Switch>

          <Route exact path="/journal/new" render={() => {
            return <JournalEntry onSubmit={this.handlePost}/>
          }}/>
          
        </Switch>
      </React.Fragment>
    </Router>
  )
}
}

export default JournalContainer;
