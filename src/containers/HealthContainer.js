import React from 'react';
import WaterIntake from '../components/healthComponents/WaterIntake';
import AddCalorie from '../components/mainComponents/AddCalories';
import AddMood from '../components/mainComponents/AddMood';
import Activities from '../components/healthComponents/Activities';
import M from 'materialize-css';

const HealthContainer = (props) => {

  if (!props.today) {
    return "Loading..."
  }

  if (props.today.exercised) {
    M.toast({html: 'Well done on exercising!'})
  }

  if (props.today.meditated) {
    M.toast({html: 'Well done on meditating!'})
  }

  return (
    <div>
    <div className="container">
    <h3>Health</h3>
    <WaterIntake onSubmit={props.onSubmit} onMoodSubmit={props.onMoodSubmit} today={props.today}/></div>
    <AddCalorie onSubmit={props.onSubmit} day={props.today}/>
    <AddMood onSubmit={props.onMoodSubmit} day={props.today}/>
    <Activities onSubmit={props.onSubmit} day={props.today} />
    </div>
  )
}

export default HealthContainer;
