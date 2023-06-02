import React from 'react';
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import './index.scss'
import Dugui from '../PieChart';
const Chart = () => {
    return (
        <div className="chart">
          <div className="top">
            <h1 className="title">Нийт элсэгчид графикаар</h1>
            <MoreVertIcon fontSize="small" />
          </div>
          <div className="bottom">
            <div className="chartChart">
              <Dugui />
            </div>
          
            <p className="amount">420</p>
            <p className="desc">
             Энэхүү график нийт элсэгчдийг сургууль сургуулиар харуулав.
            </p>
            <div className="summary">
              <div className="item">
                <div className="itemTitle">Өнөөдөр</div>
                <div className="itemResult positive">
                  <KeyboardArrowUpOutlinedIcon fontSize="small"/>
                  <div className="resultAmount">12 элсэгч</div>
                </div>
              </div>
              <div className="item">
                <div className="itemTitle">Сүүлийн 7 хоног</div>
                <div className="itemResult positive">
                  <KeyboardArrowUpOutlinedIcon fontSize="small"/>
                  <div className="resultAmount">4 элсэгч</div>
                </div>
              </div>
              <div className="item">
                <div className="itemTitle">Сүүлийн сар</div>
                <div className="itemResult positive">
                  <KeyboardArrowUpOutlinedIcon fontSize="small"/>
                  <div className="resultAmount">12 элсэгч</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
}

export default Chart