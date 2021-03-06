import React, {Component} from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

class MoodGraph extends Component {
  constructor(props){
    super(props);
    this.state = {
      moods: []
    }
    this.weeklyMoods = this.weeklyMoods.bind(this);
  }

  weeklyMoods(){
    return this.props.week.map((day) => {
      let moodDay = 0
      let dayNumber = day.id
      day.mood.map((mood) => {
          moodDay += mood.rating
      });
      moodDay = moodDay / day.mood.length
      let dataPoint = {
        name: "day " + dayNumber,
        rating: moodDay
      }
     return dataPoint;
    })
  }

  render(){

    if (!this.props){
      return "Loading..."
    }

    return (
      <div className="hoverable">
      <ResponsiveContainer height={150} width="99%">
      <LineChart width={600} height={300} data={this.weeklyMoods().reverse()} margin={{ top: 0, right: 0, bottom: 0, left: -40 }}>
      <Line type="monotone" dataKey="rating" stroke="#c62828" />
      <CartesianGrid stroke="#a5d6a7" strokeDasharray="5 5" />
      <XAxis dataKey="name" />
      <YAxis ticks={[1,2,3,4,5]} interval={0} domain={[0, 6]} />
      <Tooltip />
      </LineChart>
      </ResponsiveContainer>
      </div>
    )
  }
}

export default MoodGraph;
