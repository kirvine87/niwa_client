import React from 'react';

const AddCalories = (props) => {

  if (!props.day) {
    return "Loading..."
  }

    return (
      <React.Fragment>
      <h3>Calories: {props.day.calorieIntake}/2000</h3>
      </React.Fragment>
    )
}

export default AddCalories;
