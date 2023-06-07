import React from "react";
import MyContainer from "../../components/MyContainer";
import Header from "../../components/Header";
import "./index.scss"
import Sidebar from "../../components/Sidebar";
import DataTable from "../../components/DataTable";
import { schoolColumns, schoolRows } from "../../datatablesource";
import TransitionAlerts from "../../components/Alert";
import MySnackBar from "../../components/SnackBar";
import useSchools from "../../Hooks/useSchools";
import Loader from './../../components/Loader';
const Schools = () => {
  const [schools, loading, error] = useSchools();
  return <div className="home">
  <Sidebar />
 
  {error && <p>{error}</p>}
  <div className="homeContainer">
    <MyContainer>
    {loading && <Loader />}
      <Header name="СУРГУУЛИУД"></Header>
    
      <div className="row">
        <DataTable columns={schoolColumns } rows={schools} title="Салбар сургуулиуд" type="schools"/>
       </div>
    </MyContainer>
  </div>
</div>
};

export default Schools;
