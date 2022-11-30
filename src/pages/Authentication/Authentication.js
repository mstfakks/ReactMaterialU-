import React from "react";
import { Grid } from "@mui/material";
import Header from "../../components/Header/Header";

const Authentication = () => {
  const buttonStyles = {
    fontWeight: 600,
    fontSize: "0.875rem",
    textTransform: "capitalize",
    borderRadius: 2.5,
    "&.MuiButton-contained": {
      backgroundColor: "#009be5",
      "&:hover": {
        backgroundColor: "#006db3",
      },
    },
    "&.MuiButton-outlined": {
      color: "#fff",
      borderColor: "#fff",
      "&:hover": {
        backgroundColor: "transparent",
      },
    },
  };

  return (
    <Grid item xs={9.9}>
      <Header title={"Authentication"} />
    </Grid>
  );
};

export default Authentication;
