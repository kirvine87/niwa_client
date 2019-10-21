import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const MoodGraph = (props) => {
  const weeklyMoods = props.week.map((day) => {
    return null
  })
  const data = [
  {
    name: 'hello', uv: 5
  },
  {
    name: 'Page B', uv: 3
  },
  {
    name: 'Page C', uv: 2
  },
  {
    name: 'Page D', uv: 5
  },
  {
    name: 'Page E', uv: 1
  },
  {
    name: 'Page F', uv: 5
  },
  {
    name: 'Page G', uv: 4
  },
];

if (!props){
  return "Loading..."
}
    return (

      <ResponsiveContainer height={150} width="99%">
      <LineChart width={600} height={300} data={data} margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
   <Line type="monotone" dataKey="uv" stroke="#8884d8" />
   <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
   <XAxis dataKey="name" />
   <YAxis />
   <Tooltip />
 </LineChart>
 </ResponsiveContainer>
    )
}

export default MoodGraph;
