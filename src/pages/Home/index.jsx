import React from "react";
import css from "./index.module.scss";
import Sidebar from "../../components/Sidebar";
import MyContainer from "../../components/MyContainer";
import Header from "../../components/Header";
import Widget from "../../components/Widget";
import Chart from "../../components/Chart";
import Graphic from "../../components/Graphic";
import Datatable from "../../components/DataTable";

import {  userColumns, userRows } from "../../datatablesource";

const Home = () => {
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
          <Widget type="user" amount={100} title={"Нийт мэргэжил"}/>
          <Widget type="order"  amount={100} title={"Нийт элсэгч"}/>
          </div>
          <div className={css.charts} >
            {/* <Chart /> */}
            {/* maybe later we will seee */}
            {/* <Dugui /> */}
            {/* <Graphic aspect={4/3} /> */}
          </div>

          {/* magadgui hezee ch ashiglagdahgui baij magad etseg tenger nomch ah haraad shiideh bui za  */}
          {/* <MyTable /> */}
          < Datatable searchTitle="Овог нэрээр хайна уу" rows = {userRows} columns ={ userColumns}  title="Нийт бүртгүүлсэн элсэгчид" search/>
        </MyContainer>
      </div>
    </div>
  );
};
export default Home;
