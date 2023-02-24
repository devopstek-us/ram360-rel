// material-ui
import { Box, Typography } from "@mui/material";

// project import
import NavGroup from "./NavGroup";
import menuItem from "menu-items";
import NavItem from "./NavItem";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import React from "react";

// ==============================|| DRAWER CONTENT - NAVIGATION ||============================== //

const Navigation = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [listItems, setListItems] = React.useState<null | any>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>, list: any) => {
    setAnchorEl(event.currentTarget);
    setListItems(list);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const navGroups = menuItem.items.map((item) => {
    switch (item.type) {
      case "group":
        return (
          <NavGroup
            key={item.id}
            item={item}
            open={open}
            handleClick={handleClick}
          />
        );
      case "item":
        return <NavItem key={item.id} item={item} />;
      default:
        return (
          <Typography key={item.id} variant="h6" color="error" align="center">
            Fix - Navigation Group
          </Typography>
        );
    }
  });

  return (
    <Box flex={"1"} display="flex" flexDirection={"row-reverse"}>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        {navGroups}
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        {listItems &&
          listItems.children.map((item: any) => (
            <MenuItem onClick={handleClose}>
              <NavItem item={item} />
            </MenuItem>
          ))}
      </Menu>
    </Box>
  );
};

export default Navigation;
