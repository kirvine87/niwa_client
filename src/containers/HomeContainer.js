import React from 'react';
import AddCalories from '../components/mainComponents/AddCalories';
import AddMood from '../components/mainComponents/AddMood';
import MoodGraph from '../components/mainComponents/MoodGraph';
import WeightGraph from '../components/mainComponents/WeightGraph';

const HomeContainer = (props) => {
  return (
    <React.Fragment>
    <AddCalories onSubmit={props.onSubmit} day={props.today}/>
    <AddMood onSubmit={props.onMoodSubmit} day={props.today}/>
    <br /> <br />
    <MoodGraph week={props.week}/>
    <WeightGraph week={props.week}/>
    </React.Fragment>

  )
}

export default HomeContainer;
