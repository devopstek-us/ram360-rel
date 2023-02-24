// material-ui
import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/material";

// ==============================|| AUTH BLUR BACK SVG ||============================== //

const AuthBackgroundSplitColor = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        position: "absolute",
        filter: "blur(18px)",
        zIndex: -1,
        bottom: 0,
        minHeight: "100vh",
        height: "100vh",
        width: "100%",
      }}
    >
      <Box sx={{ height: "50%", background: theme.palette.primary.main }}></Box>
    </Box>
  );
};

export default AuthBackgroundSplitColor;
