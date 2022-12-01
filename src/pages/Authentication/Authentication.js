import React from "react";
import { IconButton, Box, Typography } from "@mui/material";
import BasicCard from "../../commons/BasicCard/BasicCard";
import SearchBar from "../../commons/SearchBar/SearchBar";
import { Refresh } from "@mui/icons-material";
import CommonButton from "../../commons/CommonButton/CommonButton";
import GridWrapper from "../../commons/GridWrapper/GridWrapper";
import { cardHeaderStyles } from "./styles";

const Authentication = () => {
  const getHeader = () => {
    const handleChange = (value) => {
      console.log(value);
    };

    const addUser = () => {
      console.log("click");
    };
    return (
      <Box sx={cardHeaderStyles.wrapper}>
        <SearchBar
          placeholder="Search by email address, phone number or user UID"
          onChange={(event) => handleChange(event.target.value)}
          searchBarWidth="720px"
        />
        <Box>
          <CommonButton
            variant="contained"
            onClick={addUser}
            size="large"
            sx={cardHeaderStyles.addUserButton}
          >
            Add User
          </CommonButton>
          <IconButton>
            <Refresh />
          </IconButton>
        </Box>
      </Box>
    );
  };

  const getContent = () => (
    <Typography
      align="center"
      sx={{
        margin: "40px 16px",
        color: "rgba(0, 0, 0, 0.6)",
        fontSize: "1.3rem",
      }}
    >
      No users for this project yet
    </Typography>
  );

  return (
    <GridWrapper>
      <BasicCard header={getHeader()} content={getContent()} />
    </GridWrapper>
  );
};

export default Authentication;
