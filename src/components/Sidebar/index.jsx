import React from "react";
import "./index.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { Link } from "react-router-dom";
import BookIcon from '@mui/icons-material/Book';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import TimelineIcon from '@mui/icons-material/Timeline';
const Sidebar = () => {
  const garchig = "IKH ZASAG";
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/">
          <span className="logo"> {garchig}</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title"> ХЯНАХ САМБАР</p>
          <Link to="/" style={{textDecoration: "none"}}>
            <li>
              <DashboardIcon className="icon" />
              <span> Нүүр</span>
            </li>
          </Link>
          <p className="title"> LIST</p>
          <Link to="/schools" style={{ textDecoration: "none" }}>
            <li>
              <SchoolIcon className="icon" />
              <span> Сургууль</span>
            </li>
          </Link>

          <li>
            <BookIcon className="icon" />

            <span> Хөтөлбөрүүд</span>
          </li>
          <li>
            <WorkIcon className="icon" />

            <span> Мэргэжил</span>
          </li>
          <p className="title"> КОМИСС</p>
          <li>
            <PersonSearchIcon className="icon" />

            <span> Комисс харах</span>
          </li>
          <li>
            <GroupAddIcon className="icon" />

            <span> Комисс томилох</span>
          </li>
          <p className="title"> ХҮСНЭГТ </p>
          <li>
            <TimelineIcon className="icon" />

            <span> График</span>
          </li>
        </ul>
      </div>
         </div>
  );
};

export default Sidebar;
