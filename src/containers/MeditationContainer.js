import React from 'react';
import Timer from '../components/meditationComponents/Timer';

const MeditationContainer = (props) => {
  if (!props.today) {
    return "Loading..."
  }

  return(
    <Timer today={props.today} onSubmit={props.onSubmit}/>
  )
}

export default MeditationContainer;
