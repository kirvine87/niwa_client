import React from 'react';
import WaterIntake from '../components/healthComponents/WaterIntake';
import AddCalorie from '../components/mainComponents/AddCalories';
import AddMood from '../components/mainComponents/AddMood';

const HealthContainer = (props) => {

  if (!props.today) {
    return "Loading..."
  }

  return (
    <div>
    <p>Hello this is the health container!</p>
    <WaterIntake onSubmit={props.onSubmit} onMoodSubmit={props.onMoodSubmit} today={props.today}/>
    <AddCalorie onSubmit={props.onSubmit} day={props.today}/>
    <AddMood onSubmit={props.onMoodSubmit} day={props.today}/>
    </div>
  )
}

export default HealthContainer;
