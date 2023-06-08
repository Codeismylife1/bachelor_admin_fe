import MyContainer from "../../components/MyContainer";
import Header from "../../components/Header";
import "./index.module.scss";
import Sidebar from "../../components/Sidebar";
import * as React from "react";
import MyGrid from "../../components/Grid";
const Graphics = () => {
  return (
    <div className="home ">
      <Sidebar />
      <div className="homeContainer">
        <MyContainer>
          <Header name="ГРАФИК"></Header>
          <MyGrid />
        </MyContainer>
      </div>
    </div>
  );
};

export default Graphics;
