import { Link } from "react-router-dom";

// material-ui
import { Box, Grid, Stack, Tab, Tabs, Typography } from "@mui/material";

// project import
import AuthLogin from "./auth-forms/AuthLogin";
import AuthWrapper from "./AuthWrapper";
import Logo from "./../../components/Logo/Logo";
import React from "react";

// ================================|| LOGIN ||================================ //

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: string | number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const Login = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    console.log("new value setting", newValue)
    setValue(newValue);
  };
  return (
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
              <Logo />
              {/* <Typography variant="h1" color={"primary"}>Log In</Typography> */}
            </Box>
            {/* <Typography component={Link} to="/register" variant="body1" sx={{ textDecoration: 'none' }} color="primary">
                        Don&apos;t have an account?
                    </Typography> */}
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ width: "100%" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              textColor="primary"
              indicatorColor="primary"
              aria-label="primary tabs example"
              variant="fullWidth"
            >
              <Tab label="Master Admin" />
              <Tab label="Local Admin" />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <AuthLogin />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <AuthLogin />
          </TabPanel>
        </Grid>
      </Grid>
    </AuthWrapper>
  );
};

export default Login;
