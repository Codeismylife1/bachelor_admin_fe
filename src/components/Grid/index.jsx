import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import DuguiChart from "../Diagram/DuguiChart";
import BosooChart from "../Diagram/BosooChart";
import Graphic from "../Graphic";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const MyGrid = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <Item>
            <DuguiChart />
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            <BosooChart />
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            <Graphic aspect={4 / 3} />
          </Item>
        </Grid>
        <Grid item xs={6}>
          {/* <DuguiChart /> */}
        </Grid>
      </Grid>
    </Box>
  );
};

export default MyGrid;
