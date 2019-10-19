import React from 'react';

const MeditationContainer = (props) => {
  if (!props.today) {
    return "Loading..."
  }
  
  return(
    <div>MeditationContainer</div>
  )
}

export default MeditationContainer;
