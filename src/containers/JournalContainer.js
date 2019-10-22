import React from 'react';
import JournalEntry from '../components/journalComponents/JournalEntry';

const JournalContainer = (props) => {

  if (!props.today) {
    return "Loading..."
  }

  return (
    <JournalEntry today={props.today} onSubmit={props.onSubmit}/>
  )
}


export default JournalContainer;
