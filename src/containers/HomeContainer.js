import React from 'react';
import AddCalories from '../components/mainComponents/AddCalories';
import AddMood from '../components/mainComponents/AddMood';
import MoodGraph from '../components/mainComponents/MoodGraph';
import CalorieGraph from '../components/mainComponents/CalorieGraph';

const HomeContainer = (props) => {

  // if (!props.day) {
  //   M.toast({html: 'Wellcome back to Niwa'})
  // }

  return (
    <React.Fragment>
    <AddCalories onSubmit={props.onSubmit} day={props.today}/>
    <br />
    <AddMood onSubmit={props.onMoodSubmit} day={props.today}/>
    <br /> <br /> <br />
    <div className="container"><h6>Your Moods This Week</h6></div>
    <MoodGraph week={props.week}/>
    <div className="container"><h6>Your Calories This Week</h6></div>
    <CalorieGraph week={props.week}/>
    </React.Fragment>

  )
}

export default HomeContainer;
