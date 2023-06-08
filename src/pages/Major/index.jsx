import React from "react";
import MyContainer from "../../components/MyContainer";
import Header from "../../components/Header";
import "./index.scss"
import Sidebar from "../../components/Sidebar";
import DataTable from "../../components/DataTable";
import { majorColumns, majorRows } from "../../datatablesource";
import useMergejils from './../../Hooks/useMergejils';
import Loading from './../../components/Loader';

const Major = () => {
  const [mergejils, loading, error] = useMergejils()
  return <div className="home">
    <Sidebar />
    <div className="homeContainer">
      <MyContainer>

        <Header name="МЭРГЭЖЛҮҮД"></Header>
        {loading && <Loading />}
        {error && <div className="error">{error}</div>}
        <DataTable title="Нийт мэргэжлүүд" rows={mergejils} columns={majorColumns} type="major" />
      </MyContainer>
    </div>
  </div>
};

export default Major;
