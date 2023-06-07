import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'arhangai',
    pv: 10,
    amt: 2400,
  },
{
    name: 'bulgan',
    pv: 20,
    amt: 2210,
  },
  {
    name: 'Page C',
    pv: 30,
    amt: 2290,
  },
  {
    name: 'Page D',
    pv: 50,
    amt: 2000,
  },
  {
    name: 'Page E',
    pv: 40,
    amt: 2181,
  },
  {
    name: 'Page F',
    pv: 70,
    amt: 2500,
  },
  {
    name: 'Page G',
    pv: 60,
    amt: 2100,
  },
  {
    name: 'Page H',
    pv: 90,
    amt: 2100,
  },
  {
    name: 'Page I',
    pv: 110,
    amt: 2100,
  },
  {
    name: 'Page J',
    pv: 120,
    amt: 2100,
  },
  {
    name: 'Page K',
    pv: 130,
    amt: 2100,
  },
  {
    name: 'Page L',
    pv: 200,
    amt: 2100,
  },
  {
    name: 'Page M',
    pv: 190,
    amt: 2100,
  },
  {
    name: 'Page N',
    pv: 180,
    amt: 2100,
  },
  {
    name: 'Page O',
    pv: 170,
    amt: 2100,
  },
  {
    name: 'Page P',
    pv: 160,
    amt: 2100,
  },
  {
    name: 'Page Q',
    pv: 100,
    amt: 2100,
  },
  {
    name: 'Page R',
    pv: 110,
    amt: 2100,
  },
  {
    name: 'Page R',
    pv: 140,
    amt: 2100,
  },
  {
    name: 'Page S',
    pv: 20,
    amt: 2100,
  },
  {
    name: 'Page T',
    pv: 50,
    amt: 2100,
  },
];

const CustomizedLabel = ({ x, y, stroke, value }) => {
  return (
    <text x={x} y={y} dy={-4} fill={stroke} fontSize={10} textAnchor="middle">
      {value}
    </text>
  );
};

const CustomizedAxisTick = ({ x, y, stroke, payload }) => {
  return (
    <g transform={`translate(${x},${y})`}>
      <text x={0} y={0} dy={16} textAnchor="end" fill="#666" transform="rotate(-35)">
        {payload.value}
      </text>
    </g>
  );
};

const DottedChart = () => {
  return (
    // <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 10,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" height={60} tick={<CustomizedAxisTick />} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pv" stroke="#8884d8" label={<CustomizedLabel  />} />
    
      </LineChart>
    // </ResponsiveContainer>
  );
};

export default DottedChart;
