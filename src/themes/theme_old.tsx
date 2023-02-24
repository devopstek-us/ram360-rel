import { createMuiTheme } from "@mui/material/styles";
// get colors from scss into js
import config from "./Variables.module.scss";
import { red } from "@mui/material/colors";
export const DEFAULT_MATERIAL_THEME = {
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: config.primaryColor,
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      main: config.secondaryColor,
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#fff",
    },
  },
};
const theme = createMuiTheme(DEFAULT_MATERIAL_THEME);
export default theme;
