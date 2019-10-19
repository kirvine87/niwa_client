import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

const JournalContainer = (props) => {
<<<<<<< HEAD
  render(){
=======
  if (!props.today) {
    return "Loading..."
  }
  
>>>>>>> e861d94898aa1033a71ecc52f1c537a71f5ed70c
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
