import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';

class SideNav extends Component {
  constructor(props) {
    super(props)
    this.M = window.M;
  }
  componentDidMount() {
    M.AutoInit();
  }

render() {
  return (
    <Router> <nav><a href="/">Niwa</a></nav>
  <ul id="slide-out" className="sidenav">
    <li><div className="user-view">
      <div className="background">
        <img src="images/6804073-nice-backgrounds.jpg" alt="background" />
      </div>
      <p><img className="circle" src="images/kyle.jpeg" alt="kyle" /></p>
      <p><span className="white-text name">Kyle</span></p>
      <p><span className="white-text email">kyle@gmail.com</span></p>
    </div></li>
    <li><div className="divider"></div></li>
    <li><a href="/journal" className="waves-effect">Journal</a></li>
    <li><a href="/meditation" className="waves-effect">Meditation</a></li>
    <li><a href="/reflection" className="waves-effect">Reflection</a></li>
    <li><a href="/health" className="waves-effect">Health</a></li>
    <li><a href="/archive" className="waves-effect">Archive</a></li>
  </ul>
  <Link to="" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></Link>
    </Router>
  );
}
}


export default SideNav;
