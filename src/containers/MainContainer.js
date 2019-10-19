import React, {Component} from 'react';
import AddCalories from '../components/mainComponents/AddCalories';
import AddMood from '../components/mainComponents/AddMood';
import MoodGraph from '../components/mainComponents/MoodGraph';
import WeightGraph from '../components/mainComponents/WeightGraph';
import Request from '../helpers/request';


class MainContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      days: []
    }

  }

  componentDidMount(){
    const request = new Request();
    request.get('api/days')
    .then(data => this.setState({days: data._embedded.days}))
  }


  render(){

    return(
      <div>
      <p>I am main container</p>
      <AddCalories />
      <AddMood />
      <MoodGraph />
      <WeightGraph />
      </div>
    )

  }

}

export default MainContainer;
