import React, { useState } from "react";
import { IconButton, Box, Typography } from "@mui/material";
import BasicCard from "../../commons/BasicCard/BasicCard";
import SearchBar from "../../commons/SearchBar/SearchBar";
import { Refresh } from "@mui/icons-material";
import CommonButton from "../../commons/CommonButton/CommonButton";
import GridWrapper from "../../commons/GridWrapper/GridWrapper";
import { cardHeaderStyles } from "./styles";
import NewUserModal from "../../commons/Modals/NewUserModal/NewUserModal";

const Authentication = () => {
  const [open, setOpen] = useState(
    false
  ); /* Modal için başlangıçta open değerini false veriyoruz */
  const getHeader = () => {
    const handleChange = (value) => {
      console.log(value);
    };

    const addUser = () => {
      setOpen(true); /* Modal open değerini burada tıklama ile true yapabiliriz. */
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
      <NewUserModal open={open} onClose={() => setOpen(false)} /> 
      {/* onClose ile herhangi bir yere basıldığında open değerini false a 
      çekip modal kapattık */}
    </GridWrapper>
  );
};

export default Authentication;
