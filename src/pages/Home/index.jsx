import React, { useEffect, useState } from "react";
import css from "./index.module.scss";
import Sidebar from "../../components/Sidebar";
import MyContainer from "../../components/MyContainer";
import Header from "../../components/Header";
import Widget from "../../components/Widget";
import Chart from "../../components/Chart";
import Graphic from "../../components/Graphic";
import Datatable from "../../components/DataTable";
import axios from './../../utils/axios'
import { userColumns, userRows } from "../../datatablesource";
import { useLocation } from "react-router-dom";
import useElsegchid from './../../Hooks/useElsegchid'
import Loading from "../../components/Loader";
const Home = () => {

  const location = useLocation();
  const [elsegchToo, setAllElsegch] = useState(null);
  const [mergejilCount, setMergejilCount] = useState(null);
  const [elsegch, loading, error] = useElsegchid();
  useEffect(() => {
    const getinfo = async () => {
      const result = await axios.get('/burtgel/get-count');
      setAllElsegch(result.data.elsegchToo)
      setMergejilCount(result.data.allMergejilCount)
    }
    getinfo()
  }, [location])
  return (
    <div className={css.home}>
      <Sidebar />
      <div className={css.homeContainer}>
        <MyContainer>
          <Header name="ХЯНАХ САМБАР"></Header>
          <div className={css.row}>
            {/* {data.map((e) => {
              return (
                <MyCard title={e.title} subtitle={e.subtitle} total={e.total} />
              );
            })} */}
            <Widget type="user" amount={mergejilCount} title={"Нийт мэргэжил"} />
            <Widget type="order" amount={elsegchToo} title={"Нийт элсэгч"} />
          </div>
          <div className={css.charts} >
            {/* <Chart /> */}
            {/* maybe later we will seee */}
            {/* <Dugui /> */}
            {/* <Graphic aspect={4/3} /> */}
          </div>

          {/* magadgui hezee ch ashiglagdahgui baij magad etseg tenger nomch ah haraad shiideh bui za  */}
          {/* <MyTable /> */}
          {error && <p>{error}</p>}
          {loading && <Loading />}
          <Datatable searchTitle="Овог нэрээр хайна уу" rows={elsegch} columns={userColumns} title="Нийт бүртгүүлсэн элсэгчид" search />
        </MyContainer>
      </div>
    </div>
  );
};
export default Home;
