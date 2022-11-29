import React from "react";
import { Grid } from "@mui/material";
import CommonButton from "../../commons/CommonButton/CommonButton";

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
    <Grid item xs={8} style={{ backgroundColor: "#009be5" }}>
      This is authentication page
      <CommonButton variant="contained" size="large" sx={buttonStyles}>
        Add User
      </CommonButton>
      <CommonButton variant="outlined" sx={buttonStyles}>
        Web Setup
      </CommonButton>
      <CommonButton variant="contained" color="primary">
        Primary
      </CommonButton>
    </Grid>
  );
};

export default Authentication;
