import React from "react";
import MyContainer from "../../components/MyContainer";
import Header from "../../components/Header";
import "./index.scss"
import { GridToolbar } from "@mui/x-data-grid";
import Datatable from "../../components/DataTable";

import Sidebar from "../../components/Sidebar";
import {  userColumns, userRows } from "../../datatablesource";
import MyTable from "../../components/Table";
import ExportToExcelButton from "../../components/ExportButton";

const Students = () => {
  return <div className="home">
  <Sidebar />
  <div className="homeContainer">
    <MyContainer>
      
      <Header name="ЭЛСЭГЧИД "></Header>
      < Datatable 
      searchTitle="Овог нэрээр хайна уу"
        slots={{ toolbar: GridToolbar }} rows = {userRows} columns ={ userColumns}  title="Нийт бүртгүүлсэн элсэгчид" search/>

        {/* latteeer */}
      {/* <ExportToExcelButton data={userRows} /> */}
    </MyContainer>
  </div>
</div>
};

export default Students;
