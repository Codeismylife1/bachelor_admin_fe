import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import { saveAs } from "file-saver";
import * as XLSX from "xlsx";
import { Button, Icon, Popover, Typography } from "@mui/material";
import { Archive, MoreVert } from "@mui/icons-material";

const ExportToExcelButton = (props) => {
  const exportToExcel = () => {
    const formattedData = props.data.map((item) => {
      // Modify the data as per your requirement
      if(props.type ==='bosoo')
      {
        return {
          name: item.name,
          Элсэгчид: item.Элсэгчид,
        };
      }
      else
      {
        if(props.type ==='graphic') 
        {
          return {
            name: item.name,
            Элсэгчид: item.нийт,
          };
        }else 
        {
          if(props.type ==='dotted')
          {
            return {
              name: item.name,
              Элсэгчид: item.Элсэгч,
            };
          }
        }
        return {
          name: item.name,
          value: item.value,
        };
      }
    });

    const worksheet = XLSX.utils.json_to_sheet(formattedData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });
    const dataBlob = new Blob([excelBuffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });

    saveAs(dataBlob, "data.xlsx");
  };
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <>
      <Button size="small" style={{color:'#8884D8',borderColor:'#8884D8'}} variant="outlined" onClick={handleClick}>
        <Icon component={Archive}></Icon>
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Button
          variant="contained"
          onClick={exportToExcel}
        >
          Excel файл татах
        </Button>
      </Popover>
    </>
  );
};

export default ExportToExcelButton;
