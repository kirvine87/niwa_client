import React from 'react';

const JournalArchive = (props) => {

  if (!props.week) {
    return "Loading..."
  }

  const entries = props.week.map((day, index) => {
    return <li key={index} value={day} >
      <div  className="collapsible-header"><i className="material-icons">menu_book</i>Day {day.id}: {day.date.slice(0,10)}</div>
      <div className="collapsible-body"><span><strong>Journal Entry:</strong></span><p>{day.journalEntry}</p>
      <p><strong>Water Intake</strong>: {day.waterIntake} cups</p>
      <p><strong>Calorie Intake</strong>: {day.calorieIntake} kcal</p>
      <p><strong>Daily Win #1:</strong></p>
      <p>{day.win1}</p>
      <p><strong>Daily Win #2:</strong></p>
      <p>{day.win2}</p>
      <p><strong>Daily Win #3:</strong></p>
      <p>{day.win3}</p>
      </div>
    </li>

  })



  return (

    <React.Fragment >
    <ul className="collapsible">
      {entries}
    </ul>
    </React.Fragment >
  )
}

export default JournalArchive;
