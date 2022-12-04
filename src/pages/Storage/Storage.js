import React, { useState } from "react";
import GridWrapper from "../../commons/GridWrapper/GridWrapper";
import BasicSnackbar from "../../commons/BasicSnackbar/BasicSnackbar";
import CommonButton from "../../commons/CommonButton/CommonButton";

const Storage = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  return (
    <GridWrapper>
      This is storage page
      <CommonButton variant="contained" onClick={handleClick}>
        open success snackbar
      </CommonButton>
      <BasicSnackbar
        open={open}
        onClose={handleClose}
        severity="error"
        message="Error Messages"
      />
    </GridWrapper>
  );
};

export default Storage;
