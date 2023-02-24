
// material-ui
import { Box, BoxProps, styled } from "@mui/material";

// box style
const StyledBox = styled(Box)(({ theme }) => ({
  border : "2px dashed " + theme.palette.grey[300]
}));

interface Props extends BoxProps {
  children?: React.ReactNode;
}
const Transitions = ({
  children,
  ...other
}: Props) => {
  return <StyledBox {...other}>{children}</StyledBox>;
};

export default Transitions;
