import React from 'react';
import JournalArchive from '../components/archiveComponents/JournalArchive';

const ArchiveContainer = (props) => {

  if (!props.week) {
    return "Loading..."
  }

  return (
    <div><h3>Archive</h3>
    <JournalArchive week={props.week}/>
    </div>
  )
}

export default ArchiveContainer;
