import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import { saveAs } from "file-saver";
import * as XLSX from "xlsx";
import { Button, Icon, Popover, Typography } from "@mui/material";
import { Archive, MoreVert } from "@mui/icons-material";

const TableToExcel = (props) => {
  const exportToExcel = () => {
    const formattedData = props.data.map((item) => {
      // Modify the data as per your requirement
      if(props.type === "major"){

        return {
          id: item.id,
          "Мэргэжлийн нэр": item.m_name,
          "Мэргэшил": item.mergeshil,
          "Хөтөлбөрийн нэр": item.h_name,
          "Сургуулийн нэр":item.s_name,
         
        };
      }
      else {
        if(props.type ==='schools')
        {
          return {
            id: item.id,
            "Сургуулийн нэр": item.name,
            "Товч нэр":item.slug,
            "Вэб хуудас": item.link,
          };
        }
        else {
          if(props.type ==='program')
          {
            return {
              id: item.id,
              "Хөтөлбөрийн нэр": item.name,
              "Суралцах хугацаа": item.s_time,
              "Босго оноо": item.bosgo_onoo,
              "Сургуулийн нэр":item.s_name,
            };
          }
          else
        return {
          burtgeliinId: item.burtgel_Id,
          "Овог нэр": item.ovog_ner,
          "id": item.id,
          "И-мэйл хаяг":item.email,
          "Регистрийн дугаар": item.rd,
          "Утас":item.utas,
          "Аймаг": item.aimag_ner,
          "Сонгосон мэргэжил" : item.songoson_mergejil,
        };
      }

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
      <Button size="small" style={{color:'royalblue',borderColor:'royalblue'}} variant="outlined" onClick={handleClick}>
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
          style={{color:'white',borderColor:'royalblue',}}
        >
          Excel файл татах
        </Button>
      </Popover>
    </>
  );
};

export default TableToExcel;
