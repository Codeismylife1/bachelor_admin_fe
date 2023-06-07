import React from "react";
import css from "./index.module.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { Link } from "react-router-dom";
import BookIcon from "@mui/icons-material/Book";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import TimelineIcon from "@mui/icons-material/Timeline";
import { PersonOutlined } from "@mui/icons-material";
import { Divider } from "@mui/material";
const Sidebar = () => {
  return (
    <div className={css.sidebar}>
      <div className={css.top}>
        <Link to="/" >
          <span className={css.logo}>IKH ZASAG</span>
        </Link>
      </div>
      <Divider className={css.hr} />
      <div className={css.center}>
        <ul>
          <p className={css.title}> ХЯНАХ САМБАР</p>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <DashboardIcon className={css.icon} />
              <span> Нүүр</span>
            </li>
          </Link>
          <p className={css.title}> LIST</p>
          <Link to="/schools" style={{ textDecoration: "none" }}>
            <li>
              <SchoolIcon className={css.icon} />
              <span> Сургууль</span>
            </li>
          </Link>
          <Link to="/programs" style={{ textDecoration: "none" }}>
            <li>
              <BookIcon className={css.icon} />

              <span> Хөтөлбөрүүд</span>
            </li>
          </Link>
          <Link to="/major" style={{ textDecoration: "none" }}>
            <li>
              <WorkIcon className={css.icon} />

              <span> Мэргэжил</span>
            </li>
          </Link>
          <Link to="/students" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlined className={css.icon} />

              <span> Элсэгчид</span>
            </li>
          </Link>
          {/* <Link to="/viewComis" style={{ textDecoration: "none" }}>
            <p className={css.title}> КОМИСС</p>
            <li>
              <PersonSearchIcon className={css.icon} />

              <span> Комисс харах</span>
            </li>
          </Link>
          <Link to="/toComis" style={{ textDecoration: "none" }}>
            <li>
              <GroupAddIcon className={css.icon} />

              <span> Комисс томилох</span>
            </li>
          </Link> */}
          <Link to="/graphics" style={{ textDecoration: "none" }}>
            <p className={css.title}> ХҮСНЭГТ </p>
            <li>
              <TimelineIcon className={css.icon} />

              <span> График</span>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
