
import { createTheme } from "@mui/material";

export const dashboardTheme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: "1rem!important",
        },
      },
    },
  },
  palette: {
    primary: {
      
      main: "#bada55",
    },
  },
  spacing: [4, 8, 12, 16, 20]
});


