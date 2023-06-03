import React from "react";
import MyContainer from "../../../components/MyContainer";
import Header from "../../../components/Header";
import "./index.scss"
import Sidebar from "../../../components/Sidebar";
import DataTable from "../../../components/DataTable";
import { schoolColumns, schoolRows } from "../../../datatablesource";

const Schools = () => {
  return <div className="home">
  <Sidebar />
  <div className="homeContainer">
    <MyContainer>
      <Header name="СУРГУУЛИУД"></Header>
      <div className="row">
        <DataTable columns={schoolColumns } rows={schoolRows} title="Салбар сургуулиуд" type="schools"/>
       </div>
    </MyContainer>
  </div>
</div>
};

export default Schools;
