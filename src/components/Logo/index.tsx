
import { Link } from "react-router-dom";

// material-ui
import { ButtonBase } from "@mui/material";

// project import
import Logo from "./Logo";
import config from "config";

// ==============================|| MAIN LOGO ||============================== //
interface LogoSectionPorps {
  sx?: any;
  to?: string;
}
const LogoSection = ({ sx, to }: LogoSectionPorps) => (
  <ButtonBase
    disableRipple
    component={Link}
    to={!to ? config.defaultPath : to}
    sx={sx}
  >
    <Logo />
  </ButtonBase>
);

export default LogoSection;
