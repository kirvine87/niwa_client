import React from 'react';

const JournalContainer = (props) => {
  if (!props.today) {
    return "Loading..."
  }
  
  return (
    <div> This is the journal container!</div>
  )
}

export default JournalContainer;
