import {
  Box,
  Button,
  Container,
  Link,
  Paper,
  styled,
  Typography,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { RoutePathList } from "routes/RoutePath";
import Image404 from "assets/images/general/404.png";
const StyledTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.grey[900],
  marginTop: theme.spacing(0),
  marginBottom: theme.spacing(2),
  fontSize: "2rem",
}));

const StyledBody = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.contrastText,
  marginBottom: theme.spacing(2),
  fontSize: "0.95rem",
}));

const StyledRoot = styled(Paper)(({ theme }) => ({
  minHeight: "calc(100vh - 83px)",
}));
type Props = {};

export default function NotFound({}: Props) {
  return (
    <StyledRoot elevation={0}>
      <Container maxWidth="xs">
        <Box display={"flex"} alignItems="center" flexDirection={"column"}>
          <StyledTitle variant="h2">Sorry, page not found!</StyledTitle>
          <StyledBody variant="subtitle2" gutterBottom textAlign={"center"}>
            Sorry, we couldn't find the page you're looking for. Perhaps you've
            mistyped the URL? Be sure to check your spelling.
          </StyledBody>
          <img src={Image404} alt={"404 not found"} loading="lazy" />
          <Link component={RouterLink} to={RoutePathList.dashboard}>
            <Button
              disabled={false}
              size="large"
              variant="contained"
              color="primary"
              sx={{ mt: 4 }}
            >
              Go To Home
            </Button>
          </Link>
        </Box>
      </Container>
    </StyledRoot>
  );
}
