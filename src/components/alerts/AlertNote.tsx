import Alert, { AlertProps } from "@mui/material/Alert";
import { styled } from "@mui/material/styles";

// loader style
const StyledAlert = styled(Alert)<AlertProps>(({ theme, severity, color }) => ({
  display: "inline-flex",
  "& .MuiAlert-icon": {
    padding: "0 0",
  },
  "& .MuiAlert-message": {
    fontSize: "0.8rem",
    fontWeight: theme.typography.fontWeightMedium,
    padding: "1px 0",
    ...(severity === "error" || color === "error"
      ? { color: theme.palette.error.main }
      : {}),
  },
}));

export default function AlertNote({ children, ...other }: AlertProps) {
  return <StyledAlert {...other}>{children}</StyledAlert>;
}
