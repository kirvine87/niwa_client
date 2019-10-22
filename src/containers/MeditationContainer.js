import React from 'react';
import Timer from '../components/meditationComponents/Timer';

const MeditationContainer = (props) => {
  if (!props.today) {
    return "Loading..."
  }

  return(
    <div className="stopwatch">
    <Timer today={props.today} onSubmit={props.onSubmit}/>
    </div>
  )
}

export default MeditationContainer;
