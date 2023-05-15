import React from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const LineC = () => {
  const data = [
    {
      "name": "Jan",
      "in": 4000,
      "ex": 2400,
      "amt": 2400
    },
    {
      "name": "Feb",
      "in": 3000,
      "ex": 1398,
      "amt": 2210
    },
    {
      "name": "Mar",
      "in": 2000,
      "ex": 9800,
      "amt": 2290
    },
    {
      "name": "Apr",
      "in": 2780,
      "ex": 3908,
      "amt": 2000
    },
    {
      "name": "May",
      "in": 1890,
      "ex": 4800,
      "amt": 2181
    },
    {
      "name": "Jun",
      "in": 2390,
      "ex": 3800,
      "amt": 2500
    },
    {
      "name": "Jul",
      "in": 3490,
      "ex": 4300,
      "amt": 2100
    },{
      "name": "Aug",
      "in": 0,
      "ex": 0,
      "amt": 0
    }
  ]
  
  return (
    <LineChart width={730} height={250} data={data}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="in" stroke="#8884d8" />
      <Line type="monotone" dataKey="ex" stroke="#82ca9d" />
    </LineChart>
  )
}

export default LineC

                            
