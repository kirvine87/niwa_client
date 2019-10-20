import React from 'react';
import DailyWins from '../components/reflectionComponents/DailyWins';

const ReflectionContainer = (props) => {
  if (!props.today) {
    return "Loading..."
  }

  return(
    <DailyWins today={props.today} onSubmit={props.onSubmit}/>
  )
}

export default ReflectionContainer;
