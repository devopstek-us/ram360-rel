import { Palette, PaletteColor, PaletteOptions, Theme, ThemeOptions } from "@mui/material/styles";
import { colors } from "@mui/material";

// add all properties added to a theme in theme configuration, import this theme then you won't get theme errors
declare module "@mui/material/styles" {
  interface CustomTheme extends Theme {
    status: {
      danger: string;
    };
    palette: CustomPalette
  }
  // allow configuration using `createTheme`
  interface CustomThemeOptions extends ThemeOptions {
    status?: {
      danger?: string;
    };
  }

  interface CustomPalette extends Palette {
    secondary_color : typeof colors.grey;
    error_color : typeof colors.red;
    warning_color : typeof colors.orange;
    success_color : typeof colors.green;
    info_color : typeof colors.cyan;
  }

  interface CustomPaletteOptions extends PaletteOptions {
    secondary_color : typeof colors.grey;
    error_color : typeof colors.red;
    warning_color : typeof colors.orange;
    success_color : typeof colors.green;
    info_color : typeof colors.cyan;
  }
}
