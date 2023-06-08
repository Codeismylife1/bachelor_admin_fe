import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import Loading from "../../Loader";
import useMergejilWithGraph from './../../../Hooks/useMergejilWithGraph'

import css from './index.module.scss'
import ExportToExcelButton from "../../ExportButton";

const BosooChart = () => {
  const [graph, loading, error] = useMergejilWithGraph();
  
  if (loading) return <Loading />
  if (error) return <p>{error}</p>;
  
  return (
    <div style={{ width: "500px", overflowX: "auto" }} >
 <div className={css.excel} >
      <ExportToExcelButton data={graph} type="bosoo"/>
      </div>
    <BarChart
      width={500}
      height={400}
      data={graph}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
      barSize={20}
    >
      {/* duusad calldaarai
       */}
      <XAxis  dataKey="name" scale="auto" padding={{ left: 5, right: 5 }} />
      <YAxis />
      <Tooltip />
      <Legend />
      <CartesianGrid strokeDasharray="2 2" />
      <Bar dataKey="Элсэгчид" fill="#8884d8" background={{ fill: "#eee" }} />
    </BarChart>
    </div>

  );
};

export default BosooChart;
