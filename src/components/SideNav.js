import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';

class SideNav extends Component {
  constructor() {
    super()
    this.M = window.M;
  }
  componentDidMount() {
    M.AutoInit();
  }
render() {
  return (
    <Router> <nav>Hello</nav>
  <ul id="slide-out" className="sidenav">
    <li><div className="user-view">
      <div className="background">
        <img src="images/6804073-nice-backgrounds.jpg" alt="background" />
      </div>
      <Link to="#user"><img className="circle" src="images/kyle.jpeg" alt="kyle" /></Link>
      <Link to="#name"><span className="white-text name">Kyle</span></Link>
      <Link to="#email"><span className="white-text email">kyle@gmail.com</span></Link>
    </div></li>
    <li><Link to="#!"><i className="material-icons">cloud</i>First Link With Icon</Link></li>
    <li><Link to="#!">Second Link</Link></li>
    <li><div className="divider"></div></li>
    <li><a className="subheader">Subheader</a></li>
    <li><Link className="waves-effect" to="#!">Third Link With Waves</Link></li>
    <li><Link to="/journal" className="waves-effect">Journal</Link></li>
    <li><Link to="/meditation" className="waves-effect">Meditation</Link></li>
    <li><Link to="/reflection" className="waves-effect">Reflection</Link></li>
    <li><Link to="/health" className="waves-effect">Health</Link></li>
    <li><Link to="/archive" className="waves-effect">Archive</Link></li>
  </ul>
  <Link to="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></Link>
    </Router>
  );
}
}


export default SideNav;
