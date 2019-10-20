import React from 'react';
import WaterIntake from '../components/healthComponents/WaterIntake';

const HealthContainer = (props) => {

  if (!props.today) {
    return "Loading..."
  }

  return (
    <div>
    <p>Hello this is the health container!</p>
    <WaterIntake onSubmit={props.onSubmit} onMoodSubmit={props.onMoodSubmit} today={props.today}/>
    </div>
  )
}

export default HealthContainer;
