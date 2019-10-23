import React, {Component} from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';
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
    <Router> <nav className="green lighten-2"><a href="/" className="niwa-header">niwa</a> <Link to="" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></Link></nav>
    <br />
  <ul id="slide-out" className="sidenav">
    <li><div className="user-view">
      <div className="background">
        <img className="blind-tree" src="/assets/blindtree.png" alt="background" />
      </div>
      <p><img id="profile" className="circle" src="images/kyle.jpeg" alt="kyle" /></p>
      <p><span className="white-text name">Kyle</span></p>
      <p><span className="white-text email">kyle@gmail.com</span></p>
    </div></li>
    <li><div className="divider"></div></li>
    <li><a href="/journal" className="waves-effect">Journal</a></li>
    <li><a href="/meditation" className="waves-effect">Meditation</a></li>
    <li><a href="/reflection" className="waves-effect">Reflection</a></li>
    <li><a href="/health" className="waves-effect">Health</a></li>
    <li><a href="/archive" className="waves-effect">Archive</a></li>
    <img className="niwa-bottom" src="/assets/niwa.png" alt="background" />
  </ul>

    </Router>
  );
}
}


export default SideNav;
