// material-ui
import { Box, Grid } from "@mui/material";

// project import
import AuthCard from "./AuthCard";
import Logo from "components/Logo";
import AuthFooter from "components/cards/AuthFooter";

// assets
import AuthBackground from "assets/images/auth/AuthBackground";
import AuthBackgroundSplitColor from "assets/images/auth/AuthBackgroundSplitColor";

// ==============================|| AUTHENTICATION - WRAPPER ||============================== //
interface Props {
  children: React.ReactNode;
}
const AuthWrapper = ({ children }: Props) => (
  <Box sx={{ minHeight: "calc(100vh - 77px)" }}>
    {/* <AuthBackground /> */}
    <AuthBackgroundSplitColor />
    <Grid
      container
      direction="column"
      justifyContent="flex-end"
      sx={{
        minHeight: "calc(100vh - 77px)",
      }}
    >
      {/* <Grid item xs={12} sx={{ ml: 3, mt: 3 }}>
        <Logo />
      </Grid> */}
      <Grid item xs={12}>
        <Grid
          item
          xs={12}
          container
          justifyContent="center"
          alignItems="center"
          sx={{
            minHeight: {
              xs: "calc(100vh - 134px - 77px)",
              md: "calc(100vh - 77px)",
            },
            // minHeight: { xs: "calc(100vh - 134px)", md: "calc(100vh - 112px)" },
          }}
        >
          <Grid item>
            <AuthCard>{children}</AuthCard>
          </Grid>
        </Grid>
      </Grid>
      {/* <Grid item xs={12} sx={{ m: 3, mt: 1 }}>
        <AuthFooter />
      </Grid> */}
    </Grid>
  </Box>
);

export default AuthWrapper;
