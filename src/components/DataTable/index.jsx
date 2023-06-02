import "./index.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";
import { useState } from "react";
import React from "react";
import "./index.scss";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const DataTable = () => {
  const [data, setData] = useState(userRows);

  
  function getValueFromInput() {
 }
const [tfValue, setTFValue] = useState("");

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
console.log(tfValue)
  const actionColumn = [
    {
    //   field: "action",
    //   headerName: "Action",
    //   width: 200,
    //   renderCell: (params) => {
    //     return (
    //       <div className="cellAction">
    //         <Link to="/users/test" style={{ textDecoration: "none" }}>
    //           <div className="viewButton">View</div>
    //         </Link>
    //         <div
    //           className="deleteButton"
    //           onClick={() => handleDelete(params.row.id)}
    //         >
    //           Delete
    //         </div>
    //       </div>
    //     );
    //   },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
      Нийт бүртгүүлсэн элсэгчид
        {/* <Link to="/users/new" className="link">
          Хайх
        </Link> */}
      <TextField size="small" onChange={(newValue) => setTFValue(newValue.target.value)} id="outlined-basic" label="Овог нэрээр хайна уу" variant="outlined"/>
        {/* <SearchInput /> */}
      </div>
        {
      (  tfValue ==="" )? 
        ( <DataGrid
         filterMode="client"
           rowSelection={false}
           checkboxSelection={false}
           className="datagrid"
           rows={data}
           columns={userColumns}
           pageSize={5}
           rowsPerPageOptions={[5]}
           pageSizeOptions={[5, 10, 25, 100]}
           
         />):
    (  <DataGrid
      filterMode="client"
        rowSelection={false}
        checkboxSelection={false}
        className="datagrid"
        rows={data.filter((e) => e.username.includes(tfValue) )}
        columns={userColumns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        pageSizeOptions={[5, 10, 25, 100]}
        
      />)
    }
    </div>
  );
};

export default DataTable;