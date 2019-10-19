import React, {Component} from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';

class App extends Component {
  constructor() {
    super()
    this.M = window.M;
  }
  componentDidMount() {
    M.AutoInit();
  }
render() {
  return (
    <div> <nav>Hello</nav>
  <ul id="slide-out" className="sidenav">
    <li><div className="user-view">
      <div className="background">
        <img src="images/6804073-nice-backgrounds.jpg" />
      </div>
      <a href="#user"><img className="circle" src="images/kyle.jpeg" /></a>
      <a href="#name"><span className="white-text name">Kyle</span></a>
      <a href="#email"><span className="white-text email">kyle@gmail.com</span></a>
    </div></li>
    <li><a href="#!"><i className="material-icons">cloud</i>First Link With Icon</a></li>
    <li><a href="#!">Second Link</a></li>
    <li><div className="divider"></div></li>
    <li><a className="subheader">Subheader</a></li>
    <li><a className="waves-effect" href="#!">Third Link With Waves</a></li>
  </ul>
  <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
    </div>
  );
}
}
export default App;
