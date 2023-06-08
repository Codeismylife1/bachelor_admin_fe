import React, { useCallback, useState } from "react";
import { PieChart, Pie, Sector } from "recharts";
import useSchoolWithGraph from "../../../Hooks/useSchoolWithGraph";
import Loading from "./../../Loader";
import ExportToExcelButton from "../../ExportButton";

import css from "./index.module.scss";
// const data = [
//   { name: "Group 1", value: 400 },
//   { name: "Group 2", value: 300 },
//   { name: "Group 3", value: 300 },
//   { name: "Group 4", value: 200 },
//   { name: "Group 5", value: 200 },
//   { name: "Group 6", value: 200 },
//   { name: "Group 7", value: 200 },
//   { name: "Group 8", value: 200 },
//   { name: "Group 9", value: 200 }
// ];

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value,
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={"#111111"}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill="none"
      />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill="#111"
      >{` ${value} Элсэлт`}</text>
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        fill="#999"
      >
        {`(Нийт элсэлтийн ${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};

const DuguiChart = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const onPieEnter = useCallback((_, index) => {
    setActiveIndex(index);
  }, []);
  const [graph, loading, error] = useSchoolWithGraph();
  // school data
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <div className={css.error}>{error}</div>;
  }
  return (
    <div>
      <div className={css.excel} >
      <ExportToExcelButton data={graph} />
      </div>
      <PieChart width={600} height={400}>
        <Pie
          activeIndex={activeIndex}
          activeShape={renderActiveShape}
          data={graph}
          cx={250}
          cy={200}
          innerRadius={80}
          outerRadius={100}
          fill="#8884d8"
          dataKey="value"
          onMouseEnter={onPieEnter}
        />
      </PieChart>
    </div>
  );
};

export default DuguiChart;
