import React, {Component} from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

class CalorieGraph extends Component {
  constructor(props){
    super(props);
    this.state = {
      calories: []
    }
    this.weeklyCalories = this.weeklyCalories.bind(this);
  }

  weeklyCalories(){
    return this.props.week.map((day) => {
      let calorieDay = 0
      let dayNumber = day.id
      calorieDay += day.calorieIntake
      calorieDay = calorieDay
      let dataPoint = {
        name: "day " + dayNumber,
        calorieIntake: calorieDay
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
      <ResponsiveContainer height={150} width="95%">
      <LineChart width={600} height={300} data={this.weeklyCalories()} margin={{ top: 0, right: 0, bottom: 0, left: -12 }}>
      <Line type="monotone" dataKey="calorieIntake" stroke="#c62828" />
      <CartesianGrid stroke="#a5d6a7" strokeDasharray="5 5" />
      <XAxis dataKey="name" />
      <YAxis ticks={[1000,2000,3000,4000,5000]} interval={0} domain={[0, 6000]} />
      <Tooltip />
      </LineChart>
      </ResponsiveContainer>
      </div>
    )
  }
}

export default CalorieGraph;
