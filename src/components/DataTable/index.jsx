import "./index.scss";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";
import { useState } from "react";
import React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import "./index.scss";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import SearchBar from "@mui/material/InputBase";
import MyModal from "../Modal";
import MyAlerts from "../Alert";
import TransitionAlerts from "../Alert";
import MyDataGrid from "../DataGrid";

const DataTable = (props) => {
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <div className="viewButton">
              <MyModal />
            </div>

            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Устгах
            </div>
          </div>
        );
      },
    },
  ];
  const [data, setData] = useState(props.rows);

  function getValueFromInput() { }
  const [tfValue, setTFValue] = useState("");

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  // let filteredData = [];
  // filteredData = props.rows.filter((item) => {
  //   return item.ovog_ner.toLowerCase().includes(tfValue.toLocaleLowerCase());
  // });
  return (
    <div className="datatable">
      <div className="datatableTitle">
        {props.title}
        {props.search ? (
          <TextField
            size="small"
            onChange={(e) => setTFValue(e.target.value)}
            id="outlined-basic"
            label={`${props.searchTitle}`}
            variant="outlined"
          />
        ) : null}
      </div>
      {props.type === "schools" ? (
        // <DataGrid
        //       filterMode="client"
        //        rowSelection={false}
        //        checkboxSelection={false}
        //        className="datagrid"
        //        rows={props.rows}
        //        columns={props.columns.concat(actionColumn)}
        //        pageSize={5}
        //        rowsPerPageOptions={[5]}
        //        pageSizeOptions={[5, 10, 25, 100]}

        //      />
        <MyDataGrid
          rows={props.rows}
          columns={props.columns.concat(actionColumn)}
        />
      ) : props.type === "major" ? (
        <MyDataGrid rows={props.rows} columns={props.columns.concat(actionColumn)} />
      ) : props.type === "program" ? (
        <MyDataGrid rows={props.rows} columns={props.columns.concat(actionColumn)} />
      ) : tfValue === "" ? (
        <MyDataGrid rows={props.rows} columns={props.columns} />
      ) : (
        // <DataGrid
        // filterMode="client"
        //  rowSelection={false}
        //  checkboxSelection={false}
        //  className="datagrid"
        //  rows={props.rows}
        //  columns={props.columns}
        //  pageSize={5}
        //  rowsPerPageOptions={[5]}
        //  pageSizeOptions={[5, 10, 25, 100]}

        //  />)
        <MyDataGrid
          rows={data}
          columns={props.columns}
        />
      )}
    </div>
  );
};

export default DataTable;
