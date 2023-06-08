import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import useAimagWithGraph  from './../../../Hooks/useAimagWithGraph';
import Loading from './../../Loader';
import ExportToExcelButton from '../../ExportButton';

import css from './index.module.scss'

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
  const [graph, loading, error] = useAimagWithGraph()
  
  if(error){
    return <div>{error}</div>
  }
  if(loading){
    return <Loading />
  }
  
  return (
    // <ResponsiveContainer width="100%" height="100%">
    <>
    <div className={css.excel} >
    <ExportToExcelButton data={graph} type='dotted'/>
    </div>
      <LineChart
        width={500}
        height={400}
        data={graph}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 10,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" height={70} tick={<CustomizedAxisTick />} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Элсэгчид" stroke="#8884d8" label={<CustomizedLabel  />} />
    
      </LineChart>
    </>

    // </ResponsiveContainer>
  );
};

export default DottedChart;
