import React from 'react';
import { ResponsiveContainer, AreaChart, XAxis, YAxis, CartesianGrid, Area, Tooltip } from 'recharts';

const data = [
  { assignment: 'Assignment 1', mark: 30 },
  { assignment: 'Assignment 2', mark: 29 },
  { assignment: 'Assignment 3', mark: 60 },
  { assignment: 'Assignment 4', mark: 60 },
  { assignment: 'Assignment 5', mark: 60 },
  { assignment: 'Assignment 6', mark: 60 },
  { assignment: 'Assignment 7', mark: 60 },
  { assignment: 'Assignment 8', mark: 60 },
];

const Statistics = () => {
  return (
    <div>
        <h1 className='text-center text-3xl font-bold my-8'>Statistics for Assignment Marks</h1>
       <ResponsiveContainer width="100%" height={400}>
      <AreaChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="assignment"/>
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="mark" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
    </ResponsiveContainer> 
    </div>
    
  );
};

export default Statistics;
