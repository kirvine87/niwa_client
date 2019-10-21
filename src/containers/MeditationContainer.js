import React from 'react';
import Timer from '../components/meditationComponents/Timer';

const MeditationContainer = (props) => {
  if (!props.today) {
    return "Loading..."
  }

  return(
    <Timer />
  )
}

export default MeditationContainer;
