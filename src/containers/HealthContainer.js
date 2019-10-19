import React from 'react';

const HealthContainer = (props) => {

  if (!props.today) {
    return "Loading..."
  }

  return (
    <div>
    <p>Hello this is the health container!</p>
    <p>{props.today.calorieIntake}</p>
    </div>
  )
}

export default HealthContainer;
