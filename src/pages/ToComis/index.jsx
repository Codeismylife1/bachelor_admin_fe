import React from "react";
import MyContainer from "../../components/MyContainer";
import Header from "../../components/Header";
import "./index.scss"
import Sidebar from "../../components/Sidebar";
import DataTable from "../../components/DataTable";
import { schoolColumns,  } from "../../datatablesource";

const ToComis = () => {
  return <div className="home">
  <Sidebar />
  <div className="homeContainer">
    <MyContainer>
      <Header name="КОМИСС ТОМИЛОХ"></Header>
    
    
    </MyContainer>
  </div>
</div>
};

export default ToComis;
