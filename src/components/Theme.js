import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ButtonBase, Tooltip, Zoom } from "@mui/material";
import { useState, useEffect } from "react";

export const appTheme = createTheme({
  palette: {
    primary: {
      main: "#215048",
      green1: "#215048",
      green2: "#219D80",
      green3: "#B6F599",
      green4: "#899B98",
      green5: "#c7d1cf",
      blue1: "#2C3343",
      blue2: "#D1D5DE",
      white: "#FFFFFF",
      space: "#435058",
      platinum: "#D9DCD6",
      black: "#444444",
      footer: "#22262f"
    },
  },
  root: {},
  typography: {
    h1: {
      fontFamily: "DM Serif Display",
    },
    h2: {
      fontFamily: "League Spartan",
    },
    button: {
      textTransform: "none",
      fontFamily: "League Spartan",
      fontWeight: 600,
      height: 45,
    },
  },
  shape: {
    borderRadius: 9, // defaults to 4
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
          @font-face {
            font-family: "DM Serif Display";
            font-style: normal;
          }
        `,
    },
  },
});
