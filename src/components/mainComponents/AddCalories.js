import React from 'react';

const AddCalories = (props) => {

  if (!props.day) {
    return "Loading..."
  }

    return (
      <React.Fragment>
      <h5>Calories: {props.day.calorieIntake}/2000</h5>
      </React.Fragment>
    )
}

export default AddCalories;
