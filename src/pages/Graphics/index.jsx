import MyContainer from "../../components/MyContainer";
import Header from "../../components/Header";
import "./index.module.scss";
import Sidebar from "../../components/Sidebar";
import * as React from "react";
import Grid from "@mui/material/Grid";
import MyGrid from "../../components/Grid";
import DuguiChart from "../../components/DuguiChart";
const Graphics = () => {
  const chartData = [
    { name: "A", value: 10 },
    { name: "B", value: 20 },
    { name: "C", value: 30 },
  ];
  return (
    <div className="home ">
      <Sidebar />
      <div className="homeContainer">
        <MyContainer>
          <Header name="ГРАФИК"></Header>
          {/* 
      <ChartComponent data={chartData} />
      <Chart /> */}
          <MyGrid />
        </MyContainer>
      </div>
    </div>
  );
};

export default Graphics;
