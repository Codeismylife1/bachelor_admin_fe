import React from "react";
import MyContainer from "../../components/MyContainer";
import Header from "../../components/Header";
import "./index.scss"
import Sidebar from "../../components/Sidebar";
import DataTable from "../../components/DataTable";
import { schoolColumns } from "../../datatablesource";
import useSchools from "../../Hooks/useSchools";
import Loader from './../../components/Loader';
const Schools = () => {
  const [schools, loading, error] = useSchools();
  return <div className="home">
    <Sidebar />
    <div className="homeContainer">
      <MyContainer>
        <Header name="СУРГУУЛИУД"></Header>
        {error && <p>{error}</p>}
        {loading && <Loader />}
        <div className="row">
          <DataTable columns={schoolColumns} rows={schools} title="Салбар сургуулиуд" type="schools" />
        </div>
      </MyContainer>
    </div>
  </div>
};

export default Schools;
