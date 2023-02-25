import { forwardRef, useEffect } from "react";
import { Link, NavLink as NavLinkBase } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// material-ui
import { useTheme } from "@mui/material/styles";
import {
  Avatar,
  Chip,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

// project import
import { activeItem } from "store/reducers/menu";
import { styled } from "@mui/material/styles";

// ==============================|| NAVIGATION - LIST ITEM ||============================== //
// @TODO implement props for item
interface NavItemProps {
  item: any;
}

// let activeStyle = {
//   textDecoration: "underline",
// };
// let nonActiveStyle = {
//   textDecoration: "none",
// };

// Appbar styled
const NavLink = styled(NavLinkBase)(({ theme }) => ({
  textDecoration: "none",
  color:
    theme.palette.mode === "dark"
      ? theme.palette.primary.contrastText
      : theme.palette.text.primary,
  marginRight: theme.spacing(1.5),
  transition: "border-width ease-in-out .1s",

  "&.active": {
    borderBottom:
      "3px solid " +
      (theme.palette.mode === "dark"
        ? theme.palette.primary.contrastText
        : theme.palette.primary.dark),
  },
  "&:hover": {
    borderBottom:
      "3px solid " +
      (theme.palette.mode === "dark"
        ? theme.palette.secondary.dark
        : theme.palette.primary.light),
  },
}));

const NavItem = ({ item }: NavItemProps) => {
  return (
    <NavLink
      to={item.url}
      // style={({ isActive }) => (isActive ? activeStyle : nonActiveStyle)}
    >
      {/* <StyledLink key={item.id} variant="h6" sx={{ mx: 1 }}> */}
      {item.title}
      {/* </StyledLink> */}
    </NavLink>
    // <Typography sx={{ minWidth: 100 }}>Contact</Typography>
  );
};
export default NavItem;
