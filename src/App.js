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
    <div>
  <ul id="slide-out" class="sidenav">
    <li><div class="user-view">
      <div class="background">
        <img src="images/6804073-nice-backgrounds.jpg" />
      </div>
      <a href="#user"><img class="circle" src="images/kyle.jpeg" /></a>
      <a href="#name"><span class="white-text name">Kyle</span></a>
      <a href="#email"><span class="white-text email">kyle@gmail.com</span></a>
    </div></li>
    <li><a href="#!"><i class="material-icons">cloud</i>First Link With Icon</a></li>
    <li><a href="#!">Second Link</a></li>
    <li><div class="divider"></div></li>
    <li><a class="subheader">Subheader</a></li>
    <li><a class="waves-effect" href="#!">Third Link With Waves</a></li>
  </ul>
  <a href="#" data-target="slide-out" class="sidenav-trigger"><i class="material-icons">menu</i></a>
    </div>
  );
}
}
export default App;
