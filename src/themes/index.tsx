import { useMemo } from "react";

// material-ui
import { CssBaseline, StyledEngineProvider } from "@mui/material";
import { createTheme, CustomTheme, ThemeProvider, ThemeOptions } from "@mui/material/styles";

// project import
import {default as PaletteConfig} from "./palette";
import Typography from "./typography";
import CustomShadows from "./shadows";
import componentsOverride from "./overrides";
import { Helmet } from "react-helmet";
// ==============================|| DEFAULT THEME - MAIN  ||============================== //
interface Props {
  children: React.ReactNode;
}
export default function ThemeCustomization({ children }: Props) {
  const theme = PaletteConfig("dark");

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const themeTypography = Typography(`'Public Sans', sans-serif`);
  const themeCustomShadows = useMemo(() => CustomShadows(theme), [theme]);

  const themeOptions = useMemo<ThemeOptions>(
    () => ({
      breakpoints: {
        values: {
          xs: 0,
          sm: 768,
          md: 1024,
          lg: 1266,
          xl: 1536,
        },
      },
      direction: "ltr",
      mixins: {
        toolbar: {
          minHeight: 60,
          paddingTop: 8,
          paddingBottom: 8,
        },
      },
      palette: theme.palette,
      customShadows: themeCustomShadows,
      typography: themeTypography,
    }),
    [theme, themeTypography, themeCustomShadows]
  );

  const themes = createTheme(themeOptions) as CustomTheme;
  themes.components = componentsOverride(themes);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={themes}>
        <CssBaseline />
        <Helmet>
          <style>
            {`
              :root {
                --palette-primary-main:   ${theme.palette.primary.main};
                --palette-primary-light:  ${theme.palette.primary.light};
                --palette-secondary-main: ${theme.palette.secondary.main};
                --palette-error-main:     ${theme.palette.error.main};
                --palette-bg-default:     ${theme.palette.background.default};
                ....
              }
         `}
          </style>
        </Helmet>
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
