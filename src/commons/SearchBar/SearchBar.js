import React from "react";
import { Search } from "@mui/icons-material";
import { Box, Input } from "@mui/material";

const SearchBar = ({ placeholder, onChange, searchBarWidth }) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Search sx={{ marginRight: "10px" }} />
      <Input
        placeholder={placeholder}
        onChange={onChange}
        sx={{
          width: searchBarWidth,
          color: "rgba(0, 0, 0, 0.6)",
          fontSize: "1.1rem",
        }}
        disableUnderline
      />
    </Box>
  );
};

export default SearchBar;
