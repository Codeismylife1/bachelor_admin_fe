import "./index.scss";
import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import useHutulburWithGraph from "./../../Hooks/useHutulburWithGraph";

import Loading from "../Loader";
import ExportToExcelButton from "../ExportButton";

const data = [{нийт:5,name:"Эрх зүй"},{нийт:2,name:"Нягтлан бодох бүртгэл"},{нийт:1,name:"Бизнесийн удирдлага"},{нийт:1,name:"Худалдаа"},{нийт:2,name:"Аюулгүй байдал-хууль сахиулах"},{нийт:5,name:"Барилгын инженер"},{нийт:2,name:"Компьютерийн программ хангамж"},{нийт:7,name:"Зураг авалт"},{нийт:4,name:"Нийгмийн шинжлэх ухаан"},{нийт:1,name:"БНСУ-ийн Кён-Ин их сургуулийн коллежтэй хамтарсан 2.5+1 жил хөтөлбөр"},{нийт:1,name:"БНСУ-ийн Кён-Ин их сургуулийн коллежтэй хамтарсан 1+1 жил хөтөлбөр"}];

const Graphic = ({ aspect, title }) => {
  const [graph, loading, error] = useHutulburWithGraph()

  if(error){
    return <div className="error">{error}</div>
  }
  return (
    <div className="chart">
      <div className="title">{title}</div>
      <div className='excel' >
      <ExportToExcelButton data={graph} type="graphic" />
      </div>
      <ResponsiveContainer width="100%" aspect={aspect}>
      {/* {error && } */}
        {loading ? <Loading /> :(


        <AreaChart
          width={730}
          height={250}
          data={graph}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" stroke="gray" hide />
          <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="нийт"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#total)"
          />
        </AreaChart>
        
        
        )
        
        }
        
      </ResponsiveContainer>
    </div>
  );
};

export default Graphic;