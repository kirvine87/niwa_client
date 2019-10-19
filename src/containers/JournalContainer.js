import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import JournalEntry from '../components/journalComponents/JournalEntry';

const JournalContainer = (props) => {

  if (!props.today) {
    return "Loading..."
  }

  return (
    <JournalEntry />
  )
}


export default JournalContainer;
