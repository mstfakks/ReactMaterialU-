import React from "react";
import { Card, CardActions, CardContent } from "@mui/material";

const BasicCard = ({ header, content }) => {
  const cardStyles = {
    width: "1050px",
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
    borderRadius: "8px",
  };
  return (
    <Card sx={cardStyles}>
      {header}
      <CardContent>{content}</CardContent>
    </Card>
  );
};

export default BasicCard;
