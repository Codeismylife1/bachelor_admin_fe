import "./index.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import W from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import WorkOutline  from "@mui/icons-material/WorkOutline";
import PersonOutline  from "@mui/icons-material/PersonOutline";

const Widget = ({ type,amount, diff,  title, subtitle  }) => {
  let data;

  //temporary
  // const amount = 100;
  // const diff = 20;

  switch (type) {
    case "user":
      data = {
        title: "Нийт мэргэжил",
        isMoney: false,
        link: "Бүх сургуульд",
        icon: (
          <WorkOutline
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "order":
      data = {
        title: "Нийт элсэгч",
        isMoney: false,
        link: "Мэргэжил сонгосон",
        icon: (
          <PersonOutline
            className="icon"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{title}</span>
        <span className="counter">
          {data.isMoney && "$"} {amount}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
       
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;