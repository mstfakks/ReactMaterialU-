import React, { useState } from "react";
import { Notifications } from "@mui/icons-material";
import { Badge, IconButton } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import BasicMenu from "../BasicMenu/BasicMenu";

const NotificationBell = ({ iconColor }) => {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const notifications = [
    {
      id: 0,
      label: "First Notification",
    },
    {
      id: 1,
      label: "Second notification",
    },
  ];
  const newNotifications = `You have ${notifications.length} new notification`;
  const noNotification = "No new notifications";
  return (
    <div>
      <Tooltip title={notifications.length ? newNotifications : noNotification}>
        <IconButton
          color={iconColor}
          onClick={notifications.length ? handleOpen : null}
          anchorEl={anchorEl}
        >
          <Badge badgeContent={notifications.length} color="error">
            <Notifications />
          </Badge>
        </IconButton>
      </Tooltip>
      <BasicMenu
        open={open}
        anchorEl={anchorEl}
        handleClose={handleClose}
        menuItems={notifications}
      />
    </div>
  );
};

export default NotificationBell;
