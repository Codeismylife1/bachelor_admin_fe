import React from "react";
import MyContainer from "../../components/MyContainer";
import Header from "../../components/Header";
import "./index.scss"
import Sidebar from "../../components/Sidebar";
import DataTable from "../../components/DataTable";
import { majorColumns, majorRows } from "../../datatablesource";

const Major = () => {
  return <div className="home">
  <Sidebar />
  <div className="homeContainer">
    <MyContainer>
      <Header name="МЭРГЭЖЛҮҮД"></Header>
        <DataTable title="Нийт мэргэжлүүд" rows={majorRows} columns={majorColumns}  type ="major"/>
    </MyContainer>
  </div>
</div>
};

export default Major;
