import React from 'react';
import AddCalories from '../components/mainComponents/AddCalories';
import AddMood from '../components/mainComponents/AddMood';
import MoodGraph from '../components/mainComponents/MoodGraph';
import WeightGraph from '../components/mainComponents/WeightGraph';
import M from 'materialize-css';

const HomeContainer = (props) => {

  // if (!props.day) {
  //   M.toast({html: 'Wellcome back to Niwa'})
  // }

  return (
    <React.Fragment>
    <AddCalories onSubmit={props.onSubmit} day={props.today}/>
    <br />
    <br />
    <AddMood onSubmit={props.onMoodSubmit} day={props.today}/>
    <br /> <br /> <br />
    <MoodGraph week={props.week}/>
    <WeightGraph week={props.week}/>
    </React.Fragment>

  )
}

export default HomeContainer;
