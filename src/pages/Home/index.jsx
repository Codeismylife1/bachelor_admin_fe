import React from "react";
import "./index.scss";
import Sidebar from "../../components/Sidebar";
import MyContainer from "../../components/MyContainer";
import Header from "../../components/Header";
import MyCard from "../../components/MyCard";
import Widget from "../../components/Widget";
import Chart from "../../components/Chart";
import Graphic from "../../components/Graphic";
import PieChart from "../../components/PieChart";
import Dugui from "../../components/PieChart";
const Home = () => {
  const data = [
    {
      title: "Нийт мэргэжил бүртгэл",
      subtitle: "Бүх сургуульд",
      total: 0,
    },
    {
      title: "Мэргэжил сонгосон",
      subtitle: "нийт элсэгч",
      total: 1,
    },
  ];
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <MyContainer>
          <Header name="ХЯНАХ САМБАР"></Header>
          <div className="row">
            {/* {data.map((e) => {
              return (
                <MyCard title={e.title} subtitle={e.subtitle} total={e.total} />
              );
            })} */}
          <Widget type="user" amount={100} title={"Нийт мэргэжил"}/>
          <Widget type="order"  amount={100} title={"Нийт элсэгч"}/>
          </div>
          <div className="charts" >
            <Chart />
            {/* <Dugui /> */}
            <Graphic aspect={4/3} />
          </div>
        </MyContainer>
      </div>
    </div>
  );
};
export default Home;
