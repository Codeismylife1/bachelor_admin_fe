import React from "react";
import { DataGrid, gridClasses  } from "@mui/x-data-grid";
import "./index.module.scss";
import { Stack } from "@mui/material";
import { alpha, styled } from '@mui/material/styles';

const ODD_OPACITY = 0.2;

const StripedDataGrid = styled(DataGrid)(({ theme }) => ({
  [`& .${gridClasses.row}.even`]: {
    backgroundColor: theme.palette.grey[200],
    '&:hover, &.Mui-hovered': {
      backgroundColor: alpha(theme.palette.primary.main, ODD_OPACITY),
      '@media (hover: none)': {
        backgroundColor: 'transparent',
      },
    },
    '&.Mui-selected': {
      backgroundColor: alpha(
        theme.palette.primary.main,
        ODD_OPACITY + theme.palette.action.selectedOpacity,
      ),
      '&:hover, &.Mui-hovered': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          ODD_OPACITY +
            theme.palette.action.selectedOpacity +
            theme.palette.action.hoverOpacity,
        ),
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: alpha(
            theme.palette.primary.main,
            ODD_OPACITY + theme.palette.action.selectedOpacity,
          ),
        },
      },
    },
  },
}));

const MyDataGrid = (props) => {
  return (
    <StripedDataGrid
    components={{
      NoRowsOverlay: () => (
        <Stack height="100%" alignItems="center" justifyContent="center">
          Хайлт олдсонгүй
        </Stack>
      ),
      NoResultsOverlay: () => (
        <Stack height="100%" alignItems="center" justifyContent="center">
         Хайлт олдсонгүй
        </Stack>
      )
    }}
      columnVisibilityModel={{
        status: false,
        id: false,
      }}
      filterMode="client"
      rowSelection={false}
      checkboxSelection={false}
      className="datagrid"
      rows={props.rows}
      columns={[...props.columns]}
      pageSize={5}
      rowsPerPageOptions={[5]}
      pageSizeOptions={[5, 10, 25, 100]}
      getRowClassName={(params) =>
        params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd'
      }
    />
  );
};

export default MyDataGrid;
