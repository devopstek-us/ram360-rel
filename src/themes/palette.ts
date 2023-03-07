// material-ui
import { PaletteMode } from "@mui/material";
import { createTheme } from "@mui/material/styles";

// project import
import ThemeOption from "./theme";

// ==============================|| DEFAULT THEME - PALETTE  ||============================== //

const Palette = (mode: PaletteMode) => {
  const paletteColor = ThemeOption();

  return createTheme({
    palette: {
      mode,
      common: {
        black: "#000",
        white: "#fff",
      },
      ...paletteColor,
      text: {
        primary: mode==='dark'?paletteColor.grey[900]:paletteColor.grey[700],
        secondary: mode==='dark'?paletteColor.grey[800]:paletteColor.grey[500],
        disabled: paletteColor.grey[400],
      },
      action: {
        disabled: paletteColor.grey[300],
      },
      divider: paletteColor.grey[200],
      background: {
        paper: mode === "dark" ? paletteColor.primary.lighter: "#ffffff",
        default:
          mode === "dark"
            ? paletteColor.secondary.lighter
            : "#F7F8FA",
      },
    },
  });
};

export default Palette;
