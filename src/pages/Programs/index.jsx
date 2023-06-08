import React from "react";
import MyContainer from "../../components/MyContainer";
import Header from "../../components/Header";
import "./index.scss"
import Sidebar from "../../components/Sidebar";
import DataTable from "../../components/DataTable";
import { programColumns, programRows } from "../../datatablesource";
import Loading from './../../components/Loader';
import useHutulburs from './../../Hooks/useHutulburs';
const Programs = () => {
  const [hutulburs, loading, error] = useHutulburs()
  return <div className="home">
    <Sidebar />
    <div className="homeContainer">
      <MyContainer>

        <Header name="ХӨТӨЛБӨРҮҮД "></Header>
        {loading && <Loading />}
        {error && <div className="error">{error}</div>}
        <DataTable title="Нийт хөтөлбөрүүд" rows={hutulburs} columns={programColumns} type="program" />
      </MyContainer>
    </div>
  </div>
};

export default Programs;
