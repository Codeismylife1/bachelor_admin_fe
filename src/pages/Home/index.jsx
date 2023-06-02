import React from "react";
import "./index.scss";
import Sidebar from "../../components/Sidebar";
import MyContainer from "../../components/MyContainer";
import Header from "../../components/Header";
import MyCard from "../../components/MyCard";
import Widget from "../../components/Widget";
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
          <Widget type="user"/>
          <Widget type="order"/>
          </div>
        </MyContainer>
      </div>
    </div>
  );
};
export default Home;
