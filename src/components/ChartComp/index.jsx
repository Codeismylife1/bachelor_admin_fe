import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { saveAs } from 'file-saver';
import ExportToExcelButton from '../ExportButton';


const ChartComponent = (props) => {
  return (
    <div>
      <BarChart width={400} height={300} data={props.data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="value" fill="#8884d8" />
      </BarChart>
      {/* <ExportToExcelButton data={props.data} /> */}
    </div>
  );
};

export default ChartComponent;
