import React from "react";
import MyContainer from "../../components/MyContainer";
import Header from "../../components/Header";
import "./index.scss"
import Sidebar from "../../components/Sidebar";
import DataTable from "../../components/DataTable";
import { programColumns, programRows } from "../../datatablesource";

const Programs = () => {
  return <div className="home">
  <Sidebar />
  <div className="homeContainer">
    <MyContainer>
      <Header name="ХӨТӨЛБӨРҮҮД "></Header>
    <DataTable title="Нийт хөтөлбөрүүд" rows={programRows} columns ={ programColumns} type="program" />
    </MyContainer>
  </div>
</div>
};

export default Programs;
