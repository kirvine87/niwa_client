import React from 'react';

const JournalArchive = (props) => {

  if (!props.week) {
    return "Loading..."
  }

  const entries = props.week.map((day, index) => {
    return <p key={index} value={day}>{day.journalEntry}</p>
  })

  return (
    <React.Fragment >
      <p>{entries}</p>
    </React.Fragment >
  )
}

export default JournalArchive;
