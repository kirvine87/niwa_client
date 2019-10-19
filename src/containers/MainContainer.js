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
      week: [],
      today: null
    }

  }

  componentDidMount(){
    const request = new Request();
    const promise1 = request.get('api/days/week')
    const promise2 = request.get('api/days/latest')
    Promise.all([promise1, promise2])
    .then(data => this.setState({week: data[0], today: data[1][0]}))
  }


  render(){

    return(
      <div>
      <p>I am main container</p>
      <AddCalories day={this.state.today}/>
      <AddMood />
      <MoodGraph />
      <WeightGraph />
      </div>
    )

  }

}

export default MainContainer;
