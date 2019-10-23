import React from 'react';
import DailyWins from '../components/reflectionComponents/DailyWins';

const ReflectionContainer = (props) => {
  if (!props.today) {
    return "Loading..."
  }

  return(
    <div>
    <h4>Your Daily Wins</h4>
    <div className="container"><p>Reflect on three achievements you made today, and write about them here.</p>  </div>
    <DailyWins today={props.today} onSubmit={props.onSubmit}/></div>

  )
}

export default ReflectionContainer;
