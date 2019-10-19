import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AddCalories from '../components/mainComponents/AddCalories';
import AddMood from '../components/mainComponents/AddMood';
import MoodGraph from '../components/mainComponents/MoodGraph';
import WeightGraph from '../components/mainComponents/WeightGraph';
import Request from '../helpers/request';
import HealthContainer from './HealthContainer'
import JournalContainer from './JournalContainer'
import MeditationContainer from './MeditationContainer'
import ReflectionContainer from './ReflectionContainer'
import ArchiveContainer from './ArchiveContainer'


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

      <Router>
      <React.Fragment>
      <AddCalories day={this.state.today}/>
      <AddMood day={this.state.today}/>
      <MoodGraph week={this.state.week}/>
      <WeightGraph week={this.state.week}/>
      <Switch>
        <Route path="/health" component={HealthContainer} />
        <Route path="/journal" component={JournalContainer} />
        <Route path="/meditation" component={MeditationContainer} />
        <Route path="/reflection" component={ReflectionContainer} />
        <Route path="/archive" component={ArchiveContainer} />
      </Switch>
      </React.Fragment>
      </Router>
    )

  }

}

export default MainContainer;
