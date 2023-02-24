import HeaderLogo from "layout/MainLayout/Drawer/DrawerHeader/HeaderLogo";
import { Outlet } from "react-router-dom";
import { AppBar, AppBarProps, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { styled } from "@mui/material/styles";

// Appbar styled
const StyledAppBar = styled(AppBar)(({ theme }) => ({
  borderBottom: "none !important",
}));

// ==============================|| LOGO ONLY LAYOUT ||============================== //

const LogoLayout = () => {
  const theme = useTheme();

  // app-bar params
  const appBar = {
    position: "relative",
    color: "inherit",
    elevation: 0,
    sx: {
      borderBottom: `1px solid ${theme.palette.divider}`,
      // boxShadow: theme.customShadows.z1
    },
  } as AppBarProps;
  return (
    <>
      <StyledAppBar {...appBar}>
        <Box p={2} mt={2}>
          <HeaderLogo />
        </Box>
      </StyledAppBar>

      <Outlet />
    </>
  );
};

export default LogoLayout;
