import React from 'react';

const JournalArchive = (props) => {

  if (!props.week) {
    return "Loading..."
  }

  const entries = props.week.map((day, index) => {
    return <li key={index} value={day} >
      <div  className="collapsible-header"><i className="material-icons">menu_book</i>Day {day.id} :{day.date.slice(0,10)}</div>
      <div className="collapsible-body"><span>Journal Entry:</span><p>{day.journalEntry}</p>
      <p>Water Intake: {day.waterIntake}</p>
      <p>Calorie Intake: {day.calorieIntake}</p>
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
