import React from "react";
import { People } from "@mui/icons-material";
import { Dns } from "@mui/icons-material";
import { Image } from "@mui/icons-material";
import { Public } from "@mui/icons-material";
import { SettingsEthernet } from "@mui/icons-material";
import { SettingsInputComponent } from "@mui/icons-material";

export const mainNavbarItems = [
  {
    id: 0,
    icon: <People />,
    label: "Authentication",
    route: "authentication",
  },
  {
    id: 1,
    icon: <Dns />,
    label: "Database",
    route: "database",
  },
  {
    id: 2,
    icon: <Image />,
    label: "Storage",
    route: "storage",
  },
  {
    id: 3,
    icon: <Public />,
    label: "Hosting",
    route: "hosting",
  },
  {
    id: 4,
    icon: <SettingsEthernet />,
    label: "Functions",
    route: "functions",
  },
  {
    id: 5,
    icon: <SettingsInputComponent />,
    label: "Machine Learning",
    route: "machine-learning",
  },
];
