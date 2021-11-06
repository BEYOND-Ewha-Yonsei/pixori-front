import { responsiveFontSizes } from "@material-ui/core";
import { createTheme } from "@material-ui/core/styles";
import palette from "./palette";

const theme = responsiveFontSizes(
  createTheme({
    palette,
    layout: {
      contentWidth: 1140,
    },
    typography: {
      fontFamily: "SpaceMono",
    },
    zIndex: {
      appBar: 1200,
      drawer: 1100,
    },
    overrides: {
      MuiButton: {
        contained: {
          boxShadow: "0 0 0",
          color: "#846cff",
          border: "solid 1px #846cff",
          backgroundColor: "white",
          "&:hover": {
            boxShadow: "0 0 0",
            backgroundColor: "#846cff",
            color: "white",
          },
        },
        containedSecondary: {
          color: "white",
          backgroundColor: "#846cff",
          "&:hover": {
            border: "solid 1px #846cff",
            backgroundColor: "white",
            color: "#846cff",
          },
        },
      },
    },
  })
);

export default theme;
