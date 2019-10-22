import React from 'react';
import WaterIntake from '../components/healthComponents/WaterIntake';
import AddCalorie from '../components/mainComponents/AddCalories';
import AddMood from '../components/mainComponents/AddMood';
import Activities from '../components/healthComponents/Activities';

const HealthContainer = (props) => {

  if (!props.today) {
    return "Loading..."
  }

  return (
    <div>
    <h4>Health</h4>
    <WaterIntake onSubmit={props.onSubmit} onMoodSubmit={props.onMoodSubmit} today={props.today}/>
    <AddCalorie onSubmit={props.onSubmit} day={props.today}/>
    <AddMood onSubmit={props.onMoodSubmit} day={props.today}/>
    <Activities onSubmit={props.onSubmit} day={props.today} />
    </div>
  )
}

export default HealthContainer;
