import React from "react";
import {
  Drawer,
  Toolbar,
  List,
  Divider,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import { mainNavbarItems } from "./consts/navbarItems";
import { useParams, useNavigate } from "react-router-dom";

const Navbar = () => {
  const drawerWidth = 320;
  const navigate = useNavigate();
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          backgroundColor: "#101F33",
          color: "rgba(255, 255, 255, 0.7)",
        },
        "& .Mui-selected": {
          color: "red",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar />
      <Divider />
      <List>
        {mainNavbarItems.map((item, index) => (
          <ListItem button key={item.id} onClick={() => navigate(item.route)}>
            <ListItemIcon
              sx={{ color: "rgba(255,255,255,0.7)", marginLeft: "20px" }}
            >
              {item.icon}
            </ListItemIcon>
            <ListItemText
              primary={item.label}
              sx={{ fontWeight: "600", fontSize: "16px" }}
            />
          </ListItem>
        ))}
      </List>
      <Divider />
    </Drawer>
  );
};

export default Navbar;
