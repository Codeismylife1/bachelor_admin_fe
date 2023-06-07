
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { saveAs } from 'file-saver';
import * as XLSX from 'xlsx';


const ExportToExcelButton = (props) => {
    const exportToExcel = () => {
      const formattedData = props.data.map(item => {
        // Modify the data as per your requirement
        return {
          name: item.name,
          value: item.value,
        };
      });
  
      const worksheet = XLSX.utils.json_to_sheet(formattedData);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
      const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
      const dataBlob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
  
      saveAs(dataBlob, 'data.xlsx');
    };
  
    return (
      <button onClick={exportToExcel}>Export to Excel</button>
    );
  };

  export default ExportToExcelButton