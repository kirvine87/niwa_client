import React, {Component} from 'react';
import MainContainer from './containers/MainContainer';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LoginContainer from './containers/LoginContainer';

class App extends Component {

render() {

  return (
      <React.Fragment>
        <MainContainer />
        <Router>
          <Route exact path="/">
            <LoginContainer />
          </Route>
        </Router>
      </React.Fragment>
  );
}
}
export default App;
