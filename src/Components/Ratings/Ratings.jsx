import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';


const data = [
  { name: '0', y: 512 },
  { name: '1', y: 630 },
  { name: '2', y: 550 },
  { name: '3', y: 638 },
  { name: '4', y: 528 },
  { name: '5', y: 502 },
];

const MyBarChart = () => {
  return (
   <div>
     <div style={{ width: '100%', height: 400 }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          layout="vertical" 
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" domain={[0, 1200]} />
          <YAxis dataKey="name" type="category" />
          <Tooltip />
          <Bar dataKey="y" fill="#ff8042" isAnimationActive={true} />
        </BarChart>
      </ResponsiveContainer>
     
    </div>
   </div>
  );
};

export default MyBarChart;