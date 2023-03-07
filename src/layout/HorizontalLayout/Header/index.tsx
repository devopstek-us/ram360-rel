// material-ui
import { useTheme } from "@mui/material/styles";
import { AppBar, AppBarProps, Box, Toolbar } from "@mui/material";

// project import
import Profile from "./Profile";
import Notification from "./Notification";
import Navigation from "layout/HorizontalLayout/Navigation";
import HeaderLogo from "layout/MainLayout/Drawer/DrawerHeader/HeaderLogo";

// assets

// ==============================|| MAIN LAYOUT - HEADER ||============================== //
interface Props {
  open: boolean;
  handleDrawerToggle: (event: any) => any;
}
const Header = ({ open, handleDrawerToggle }: Props) => {
  const theme = useTheme();

  // app-bar params
  const appBar: Partial<AppBarProps> = {
    position: "fixed",
    color: "inherit",
    elevation: 0,
    sx: {
      borderBottom: `1px solid ${theme.palette.divider}`,
      // boxShadow: theme.customShadows.z1
    },
  };
  return (
    <>
      <AppBar {...appBar} color={theme.palette.mode === 'dark'? "primary": "inherit"} enableColorOnDark={theme.palette.mode === 'dark'? true: undefined}  component={"div"}>
        <Toolbar>
          <Box p={1} mr={3}>
            <HeaderLogo />
          </Box>
          <Navigation />

          <Notification />
          <Profile />
        </Toolbar>
      </AppBar>
    </>
  );
};
export default Header;
