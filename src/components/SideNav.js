import React, {Component} from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';

class SideNav extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    M.AutoInit();
  }

render() {
  return (
    <Router> <nav id="nav" className="green lighten-2 niwa-header"><a href="/home">niwa</a> <Link to="" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></Link></nav>
    <br />

  <ul id="slide-out" className="sidenav">
    <li><div className="user-view">
      <div className="background">
        <img className="blind-tree" src="/assets/blindtree.png" alt="background" />
      </div>
      <p><img id="profile" className="circle" src="images/kyle.jpeg" alt="kyle" /></p>
      <h5><span id="profile-name" className="green-text text-darken-4 name">Kyle</span></h5>
      <h6><span id="profile-email" className="green-text text-darken-4 email">kyle@gmail.com</span></h6>
    </div></li>
    <li><div className="divider"></div></li>
    <li><a href="/" className="waves-effect waves-green">Home</a></li>
    <li><a href="/journal" className="waves-effect waves-green">Journal</a></li>
    <li><a href="/meditation" className="waves-effect waves-green">Meditation</a></li>
    <li><a href="/reflection" className="waves-effect waves-green">Reflection</a></li>
    <li><a href="/health" className="waves-effect waves-green">Health</a></li>
    <li><a href="/archive" className="waves-effect waves-green">Archive</a></li>
    <img className="niwa-bottom" src="/assets/niwa.png" alt="background" />
  </ul>


    </Router>
  );
}
}


export default SideNav;
