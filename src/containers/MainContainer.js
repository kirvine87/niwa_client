import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Request from '../helpers/request';
import HealthContainer from './HealthContainer';
import JournalContainer from './JournalContainer';
import MeditationContainer from './MeditationContainer';
import ReflectionContainer from './ReflectionContainer';
import ArchiveContainer from './ArchiveContainer';
import SideNav from '../components/SideNav';
import HomeContainer from './HomeContainer';


class MainContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      week: [],
      today: null
    }
    this.handleDayUpdate = this.handleDayUpdate.bind(this);
    this.isToday = this.isToday.bind(this)
    this.handleNewMood = this.handleNewMood.bind(this);
  }
  handleDayUpdate(id, day, location) {
  const request = new Request();
  request.patch('/api/days/' + id, day)
  .then(() => {
    window.location = location
  })
}
isToday(checkDate){
  const someDate = new Date(checkDate)
  const today = new Date()
  return someDate.getDate() === today.getDate() &&
  someDate.getMonth() === today.getMonth() &&
  someDate.getFullYear() === today.getFullYear()
}

handleNewMood(mood, location){
  const request = new Request();
  request.post('/api/moods', mood)
  .then(() => {
    window.location = location
  })


}
  componentDidMount(){
    const request = new Request();
    const promise1 = request.get('api/days/week')
    const promise2 = request.get('api/days/latest')
    Promise.all([promise1, promise2])
    .then((data) => {
      this.setState({week: data[0]})
      if (this.isToday(data[1][0].date)) {
        return data[1][0];
      } else {
        return request.post('api/days', {date: new Date()});
      }
    })
    .then(data => this.setState({today: data}))
  }

  render(){

    return(

      <Router>
      <React.Fragment>
      <SideNav />
      <Switch>
        <Route exact path="/" render={(props) => {
            return <HomeContainer onSubmit={this.handleDayUpdate} onMoodSubmit={this.handleNewMood} today={this.state.today} week={this.state.week} />
        }} />
        <Route path="/health" render={(props) => {
            return <HealthContainer onSubmit={this.handleDayUpdate} onMoodSubmit={this.handleNewMood} today={this.state.today}/>
          }} />
        <Route path="/journal" render={(props) => {
            return <JournalContainer onSubmit={this.handleDayUpdate} today={this.state.today}/>
          }} />
        <Route path="/meditation" render={(props) => {
            return <MeditationContainer onSubmit={this.handleDayUpdate} today={this.state.today}/>
          }} />
        <Route path="/reflection" render={(props) => {
            return <ReflectionContainer onSubmit={this.handleDayUpdate} today={this.state.today}/>
          }} />
        <Route path="/archive" render={(props) => {
            return <ArchiveContainer onSubmit={this.handleDayUpdate} today={this.state.today} week={this.state.week}/>
          }} />
      </Switch>
      </React.Fragment>
      </Router>
    )

  }
}

export default MainContainer;
