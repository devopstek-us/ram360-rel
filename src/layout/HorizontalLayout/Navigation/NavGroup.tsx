
import { useSelector } from "react-redux";
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import React from "react";

// ==============================|| NAVIGATION - LIST GROUP ||============================== //
// @TODO implement item props
interface NavGroupProps {
  item: any;
  handleClick:any
  open:any
}
const NavGroup = ({ item, handleClick, open }: NavGroupProps) => {
  const onClick = (e:any)=>{
    handleClick(e, item)
  }
  return (
    <React.Fragment>
      
        <Typography onClick={onClick} sx={{ minWidth: 100 }}>{item.title}</Typography>
      
    </React.Fragment>
    
  );
};

export default NavGroup;
