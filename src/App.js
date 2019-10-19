import React, {Component} from 'react';
import SideNav from './components/SideNav';
import MainContainer from './containers/MainContainer';

class App extends Component {

render() {
  return (
      <React.Fragment>
        <SideNav />
        <MainContainer />
      </React.Fragment>
  );
}
}
export default App;
