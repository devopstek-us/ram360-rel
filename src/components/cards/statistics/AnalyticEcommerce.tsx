// material-ui
import { Box, Chip, Grid, Stack, Typography } from "@mui/material";

// project import
import MainCard from "components/MainCard";

// assets
import { RiseOutlined, FallOutlined } from "@ant-design/icons";

// ==============================|| STATISTICS - ECOMMERCE CARD  ||============================== //
interface Props {
  color?: string;
  title?: string;
  count?: string;
  percentage?: number;
  isLoss?: boolean;
  extra?: React.ReactNode | string;
}
const AnalyticEcommerce = ({
  color = "primary",
  title,
  count,
  percentage,
  isLoss,
  extra,
}: Props) => (
  <MainCard contentSX={{ p: 2.25 }}>
    <Stack spacing={0.5}>
      <Box display={"flex"} justifyContent="space-between">
        <Typography variant="h6" color="textSecondary">
          {title}
        </Typography>
        {percentage && (
          <Typography variant="subtitle1">
            {`${percentage}%`}
            {!isLoss && (
              <Box color="success.main" display={"inline-block"} ml={0.4}>
                <RiseOutlined style={{ fontSize: "1rem", color: "inherit" }} />
              </Box>
            )}
            {isLoss && (
              <Box color="error.main" display={"inline-block"} ml={0.4}>
                <FallOutlined style={{ fontSize: "1rem", color: "inherit" }} />
              </Box>
            )}
          </Typography>
        )}
      </Box>
      <Grid container alignItems="center">
        <Grid item>
          <Typography variant="h4" color="inherit">
            {count}
          </Typography>
        </Grid>
        {/* {percentage && (
          <Grid item>
            <Chip
              variant="filled"
              color={color as any}
              icon={
                <>
                  {!isLoss && (
                    <RiseOutlined
                      style={{ fontSize: "0.75rem", color: "inherit" }}
                    />
                  )}
                  {isLoss && (
                    <FallOutlined
                      style={{ fontSize: "0.75rem", color: "inherit" }}
                    />
                  )}
                </>
              }
              label={`${percentage}%`}
              sx={{ ml: 1.25, pl: 1 }}
              size="small"
            />
          </Grid>
        )} */}
      </Grid>
    </Stack>
    {/* <Box sx={{ pt: 2.25 }}>
      <Typography variant="caption" color="textSecondary">
        You made an extra{" "}
        <Typography
          component="span"
          variant="caption"
          sx={{ color: `${color || "primary"}.main` }}
        >
          {extra}
        </Typography>{" "}
        this year
      </Typography>
    </Box> */}
  </MainCard>
);

export default AnalyticEcommerce;
