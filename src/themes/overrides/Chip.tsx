
// ==============================|| OVERRIDES - CHIP ||============================== //

import { CustomTheme } from "@mui/material/styles";

export default function Chip(theme: CustomTheme) {
  return {
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          "&:active": {
            boxShadow: "none",
          },
        },
        sizeLarge: {
          fontSize: "1rem",
          height: 40,
        },
        light: {
          color: theme.palette.primary.main,
          backgroundColor: theme.palette.secondary_color[100],
          borderColor: theme.palette.primary.light,
          "&.MuiChip-lightError": {
            color: theme.palette.error.main,
            backgroundColor: theme.palette.error_color[50],
            borderColor: theme.palette.error.light,
          },
          "&.MuiChip-lightSuccess": {
            color: theme.palette.success.main,
            backgroundColor: theme.palette.success_color[50],
            borderColor: theme.palette.success.light,
          },
          "&.MuiChip-lightWarning": {
            color: theme.palette.warning.main,
            backgroundColor: theme.palette.warning_color[50],
            borderColor: theme.palette.warning.light,
          },
        },
      },
    },
  };
}
