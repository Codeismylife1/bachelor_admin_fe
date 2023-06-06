import React from "react";
import MyContainer from "../../components/MyContainer";
import Header from "../../components/Header";
import "./index.module.scss"
import Sidebar from "../../components/Sidebar";

const Graphics = () => {
  return <div className="home ">
  <Sidebar />
  <div className="homeContainer">
    <MyContainer>
      <Header name="ГРАФИК"></Header>
    </MyContainer>
  </div>
</div>
};

export default Graphics;
