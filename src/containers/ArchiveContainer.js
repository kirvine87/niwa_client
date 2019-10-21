import React from 'react';
import JournalArchive from '../components/archiveComponents/JournalArchive';

const ArchiveContainer = (props) => {

  if (!props.week) {
    return "Loading..."
  }

  return (
    <JournalArchive week={props.week}/>
  )
}

export default ArchiveContainer;
