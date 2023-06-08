import React from "react";
import MyContainer from "../../components/MyContainer";
import Header from "../../components/Header";
import "./index.jsx"
import Sidebar from "../../components/Sidebar";
import DataTable from "../../components/DataTable";
import { schoolColumns,  } from "../../datatablesource";
import TransitionAlerts from "../../components/Alert";
import MySnackBar from "../../components/SnackBar";

const Schools = () => {
  return <div className="home">
  <Sidebar />
  <div className="homeContainer">
    <MyContainer>
      <Header name="КОМИСС ХАРАХ"></Header>
    </MyContainer>
  </div>
</div>
};

export default Schools;
