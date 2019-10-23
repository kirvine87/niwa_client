import React, {Component} from 'react';

class LoginContainer extends Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    document.getElementById('nav').style.display = "none";
  }


render(){
  return (
    <div className="row" >
    <div className="col s12 m6">
    <div className="card">
    <div className="card-content black-text">
    <span className="card-title">Login</span>
      <form>
    <input type="text" placeholder="Username" name="username" />
    <input type="password" placeholder="Password" name="password" />
    <button onClick={this.props.onClick} type="submit" className="btn-small mt-2 green lighten-2"><a href="/home">Login</a></button>
      </form>
    </div>
    </div>
    </div>
    </div>
  )
}

}

export default LoginContainer
