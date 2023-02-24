// ==============================|| PRESET THEME - THEME SELECTOR ||============================== //
import { colors } from "@mui/material";
import { customPrimary, customSecondary } from "./customColors";

const Theme = () => {
  const { blue, red, orange, cyan, green, grey } = colors;
  const gray_0 = "#0000000";
  const contrastText = "#fff";
  return {
    primary: {
      // blue replaced with ping custom color
      lighter: customPrimary[50],
      100: customPrimary[100],
      200: customPrimary[200],
      light: customPrimary[300],
      400: customPrimary[400],
      main: customPrimary[500],
      dark: customPrimary[600],
      700: customPrimary[700],
      darker: customPrimary[800],
      900: customPrimary[900],
      contrastText,
    },
    secondary: {
      // blue replaced with purple custom color
      lighter: customSecondary[100],
      100: customSecondary[100],
      200: customSecondary[200],
      light: customSecondary[300],
      400: customSecondary[400],
      main: customSecondary[500],
      600: customSecondary[600],
      dark: customSecondary[700],
      800: customSecondary[800],
      darker: customSecondary[900],
      A100: gray_0,
      A200: customSecondary.A400,
      A300: customSecondary.A700,
      contrastText: gray_0,
    },
    // error: {
    //     lighter: red[50],
    //     light: red[200],
    //     main: red[400],
    //     dark: red[700],
    //     darker: red[900],
    //     contrastText
    // },
    // warning: {
    //     lighter: orange[50],
    //     light: orange[300],
    //     main: orange[500],
    //     dark: orange[700],
    //     darker: orange[900],
    //     contrastText: grey[100]
    // },
    // info: {
    //     lighter: cyan[50],
    //     light: cyan[300],
    //     main: cyan[500],
    //     dark: cyan[700],
    //     darker: cyan[900],
    //     contrastText
    // },
    // success: {
    //     lighter: green[50],
    //     light: green[300],
    //     main: green[500],
    //     dark: green[700],
    //     darker: green[900],
    //     contrastText
    // },
    grey: grey,
    secondary_color: grey,
    error_color: red,
    warning_color: orange,
    success_color: green,
    info_color: cyan,
  };
};

export default Theme;
