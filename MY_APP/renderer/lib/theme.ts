import { createMuiTheme } from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";
import indigo from "@material-ui/core/colors/indigo";

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: indigo[500],
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#fff",
    },
  },
});
