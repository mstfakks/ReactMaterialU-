import React from "react";
import { Box, Typography, Modal, Input } from "@mui/material";
import CommonButton from "../CommonButton/CommonButton";
import { modalStyles } from "./styles";

export default function BasicModal({
  open,
  onClose,
  title,
  subTitle,
  content,
  onSubmit
}) {
  return (
    <Modal open={open} onClose={onClose}>
      {/*onClose ile modal kapanmasını tetikleriz*/}
      {/* Modal içerisine gelen open propsu true olduğunda görünür. */}
      <Box sx={modalStyles.wrapper}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {title}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {subTitle}
        </Typography>
        {content}

        <Box sx={modalStyles.buttons}>
          <CommonButton variant="contained" onClick={onSubmit}>
            Submit
          </CommonButton>
          <CommonButton onClick={onClose}>Cancel</CommonButton>
        </Box>
      </Box>
    </Modal>
  );
}
