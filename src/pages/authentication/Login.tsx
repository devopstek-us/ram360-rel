import { Link } from "react-router-dom";

// material-ui
import { Box, Grid, Stack, Typography } from "@mui/material";

// project import
import AuthLogin from "./auth-forms/AuthLogin";
import AuthWrapper from "./AuthWrapper";
import Logo from "./../../components/Logo/Logo";

// ================================|| LOGIN ||================================ //

const Login = () => (
  <AuthWrapper>
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="baseline"
          sx={{ mb: { xs: -0.5, sm: 0.5 } }}
        >
          {/* <Typography variant="h3">Login</Typography> */}
          <Box
            display="flex"
            sx={{ width: "100%" }}
            justifyContent={"center"}
            alignItems={"center"}
          >
            {/* <Logo /> */}
            <Typography variant="h1" color={"primary"}>Log In</Typography>
          </Box>
          {/* <Typography component={Link} to="/register" variant="body1" sx={{ textDecoration: 'none' }} color="primary">
                        Don&apos;t have an account?
                    </Typography> */}
        </Stack>
      </Grid>
      <Grid item xs={12}>
        <AuthLogin />
      </Grid>
    </Grid>
  </AuthWrapper>
);

export default Login;
