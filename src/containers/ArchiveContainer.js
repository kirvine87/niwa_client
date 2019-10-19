import React from 'react';

const ArchiveContainer = (props) => {
  if (!props.today) {
    return "Loading..."
  }
  
  return (
    <div>This is the archive!</div>
  )
}

export default ArchiveContainer;
