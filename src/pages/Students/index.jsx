import React from "react";
import MyContainer from "../../components/MyContainer";
import Header from "../../components/Header";
import "./index.scss";
import { GridToolbar } from "@mui/x-data-grid";
import Datatable from "../../components/DataTable";

import Sidebar from "../../components/Sidebar";
import { userColumns, userRows } from "../../datatablesource";
import MyTable from "../../components/Table";
import ExportToExcelButton from "../../components/ExportButton";
import useElsegchid from "./../../Hooks/useElsegchid";
import TableExcelExport from "../../components/GridDataTablePro";
const Students = () => {
  const [elsegch, loading, error] = useElsegchid();
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <MyContainer>
          <Header name="ЭЛСЭГЧИД "></Header>
          {loading && <loading />}
          {error && <div className="error">{error}</div>}
          < Datatable   
      searchTitle="Овог нэрээр хайна уу"
        slots={{ toolbar: GridToolbar }} rows = {userRows} columns ={ userColumns}  title="Нийт бүртгүүлсэн элсэгчид" search/>
          {/* latteeer */}
          {/* <ExportToExcelButton data={userRows} /> */}
        </MyContainer>
      </div>
    </div>
  );
};

export default Students;
