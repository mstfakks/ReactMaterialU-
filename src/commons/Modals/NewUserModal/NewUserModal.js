import React from "react";
import BasicModal from "../../BasicModal/BasicModal";
import { Box, Input, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const NewUserModal = ({ open, onClose }) => {
  const modalStyles = {
    inputFields: {
      display: "flex",
      flexDirection: "column",
      marginTop: "20px",
      marginBottom: "15px",
      ".MuiInput-root": {
        marginBottom: "20px",
      },
    },
  };
  const getContent = () => (
    <Box sx={modalStyles.inputFields}>
      <TextField
        placeholder="User ID"
        name="userId"
        label="User ID"
        required
        error
        helperText="This is error message"
      />
      <TextField placeholder="User ID" name="userId" label="User ID" />
      <TextField placeholder="User ID" name="userId" label="User ID" />
    </Box>
  );

  const validationSchema = Yup.object().shape({
    userId: Yup.string()
      .required("User Id is required")
      .min(6, "User ID must be at least 6 characters"),
    email: Yup.string()
      .required("Email is required")
      .email("Email is invalid"),
    phoneNumber: Yup.string(),
  });
  return (
    <BasicModal
      open={open}
      onClose={onClose}
      title="New User"
      subTitle="Fill out inputs and hit 'submit' button"
      content={getContent()}
      validate={() => {}}
    >
      NewUserModal
    </BasicModal>
  );
};

export default NewUserModal;
