// material-ui
import { styled, useTheme } from "@mui/material/styles";
import { Box, BoxProps } from "@mui/material";

// ==============================|| AUTH BLUR BACK SVG ||============================== //

const StyledBox = styled(Box)<
  BoxProps & { location?: string; backgorund?: string }
>(({ theme, location, backgorund }) => {
  return {
    background: `${backgorund || "#FFB5EF"} 0% 0% no-repeat padding-box`,
    opacity: 1,
    // shapeOutside: "ellipse(40% 50% at left)",
    clipPath: "ellipse(40% 50%)",
    position: "absolute",
    width: "75%",
    height: "100vh",
    ...(location !== "bottom"
      ? { top: "-14vh", left: "-15vw" }
      : { bottom: "-33vh", right: "-15vw" }),
  };
});

const AuthBackgroundSplitColor = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        position: "absolute",
        // filter: "blur(18px)",
        background: "#fff",
        zIndex: -1,
        bottom: 0,
        minHeight: "100vh",
        height: "100vh",
        width: "100%",
        overflow: "hidden",
      }}
    >
      {/* <Box sx={{ height: "50%", background: theme.palette.primary.main }}></Box> */}
      {/* <Box sx={{ height: "50%", background: theme.palette.primary.main }}></Box> */}
      <StyledBox backgorund="#FF43CC"/>
      <StyledBox location={"bottom"} />
    </Box>
  );
};

export default AuthBackgroundSplitColor;
