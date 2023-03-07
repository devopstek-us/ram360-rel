import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";

// material-ui
import {
  Box,
  Link,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

// third-party
import NumberFormat from "react-number-format";

// project import
import Dot from "components/@extended/Dot";

function createData(
  antenna_number: number,
  model: any,
  latitude: number,
  longitude: number,
  site_address: string,
  carrier: string,
  sector: string,
  position: string,
  status: 1 | 0,
  MAP: number
) {
  return {
    antenna_number,
    model,
    latitude,
    longitude,
    site_address,
    carrier,
    sector,
    position,
    status,
    MAP,
  };
}

export const towersData = [
  createData(
    352800,
    "Ericsson 5Gran",
    43.4926827,
    -112.1037469,
    "Buenos Aires",
    "T Mobile",
    "3",
    "9",
    1,
    0
  ),
  createData(
    581500,
    "M19 Sierra Wireless RV50",
    42.341042,
    -71.217133,
    "Newton",
    "T Mobile",
    "4",
    "9",
    0,
    15
  ),
  createData(
    271919,
    "Airgain MaxBeam 80N",
    42.810356,
    -70.893875,
    "Newburyport",
    "T Mobile",
    "4",
    "3",
    0,
    24
  ),
  createData(
    132528,
    "Ericsson 5Gran",
    31.284788,
    -92.471176,
    "Alexandria",
    "T Mobile",
    "1",
    "6",
    0,
    78
  ),
  createData(
    375586,
    "KP Performance KPPA-900-120-11.5",
    39.8383291,
    -99.911016,
    "Norton",
    "T Mobile",
    "1",
    "7",
    0,
    98
  ),
  createData(
    911898,
    "M19 Sierra Wireless RV50",
    33.7924957,
    -84.4041256,
    "Atlantic Station",
    "T Mobile",
    "2",
    "2",
    1,
    0
  ),
  createData(
    327692,
    "Airgain MaxBeam 80N",
    34.207116,
    -77.9421102,
    "Wilmington",
    "T Mobile",
    "3",
    "5",
    1,
    0
  ),
  createData(
    692626,
    "Ericsson 5Gran",
    43.7845057,
    -99.3598979,
    "Chamberlain",
    "T Mobile",
    "2",
    "3",
    0,
    2
  ),
  createData(
    910208,
    "M19 Sierra Wireless RV50",
    42.6891891,
    -103.8892718,
    "Harrison",
    "T Mobile",
    "4",
    "9",
    1,
    0
  ),
  createData(
    752732,
    "Airgain MaxBeam 80N",
    47.5047686,
    -111.3735546,
    "Great Falls",
    "T Mobile",
    "3",
    "7",
    0,
    35
  ),
  createData(
    650723,
    "Ericsson 5Gran",
    39.7642548,
    -104.9951957,
    "Denver",
    "T Mobile",
    "4",
    "1",
    1,
    0
  ),
  createData(
    299567,
    "KP Performance KPPA-900-120-11.5",
    36.0863414,
    -115.3317164,
    "Spring Valley",
    "T Mobile",
    "4",
    "6",
    1,
    0
  ),
  createData(
    834351,
    "Cambium Networks - C050045AL08C - PMP450i",
    37.7586346,
    -122.3753924,
    "Oakland",
    "T Mobile",
    "1",
    "4",
    1,
    0
  ),
  createData(
    493378,
    "M19 Sierra Wireless RV50",
    43.4926827,
    -112.1037469,
    "site 8976896A",
    "T Mobile",
    "10",
    "2",
    0,
    40
  ),
  createData(
    545535,
    "Airgain MaxBeam 80N",
    40.649096,
    -73.964303,
    "site 4363278B",
    "T Mobile",
    "1",
    "1",
    0,
    50
  ),
  createData(
    545536,
    "Ericsson 5Gran",
    41.695668,
    -86.896218,
    "site 4363260A",
    "T Mobile",
    "2",
    "1",
    1,
    0
  ),
  createData(
    545540,
    "KP Performance KPPA-900-120-11.5",
    40.003656,
    -83.007354,
    "site 4363756A",
    "T Mobile",
    "1",
    "3",
    0,
    89
  ),
  createData(
    478465,
    "Cambium Networks - C050045AL08C - PMP450i",
    39.77911,
    -84.33467,
    "site 6789865B",
    "T Mobile",
    "2",
    "1",
    1,
    0
  ),
];

const towersDataTable = [...towersData].splice(0, 9);

function descendingComparator(a: any, b: any, orderBy: any) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order: any, orderBy: any) {
  return order === "desc"
    ? (a: any, b: any) => descendingComparator(a, b, orderBy)
    : (a: any, b: any) => -descendingComparator(a, b, orderBy);
}

function stableSort(array: any, comparator: any) {
  const stabilizedThis = array.map((el: any, index: any) => [el, index]);
  stabilizedThis.sort((a: any, b: any) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el: any) => el[0]);
}

// ==============================|| ORDER TABLE - HEADER CELL ||============================== //
const headCells = [
  {
    id: "antenna_number",
    align: "left",
    disablePadding: false,
    label: "Antenna Number",
  },
  {
    id: "model",
    align: "left",
    disablePadding: true,
    label: "Make & Model",
  },
  {
    id: "latitude",
    align: "left",
    disablePadding: false,
    label: "Latitude",
  },
  {
    id: "longitude",
    align: "left",
    disablePadding: false,
    label: "Longitude",
  },

  {
    id: "site_address",
    align: "left",
    disablePadding: false,

    label: "Site address",
  },
  {
    id: "carrier",
    align: "left",
    disablePadding: false,
    label: "Carrier",
  },
  {
    id: "sector",
    align: "left",
    disablePadding: false,
    label: "Sector",
  },
  {
    id: "position",
    align: "left",
    disablePadding: false,
    label: "Position",
  },
  {
    id: "status",
    align: "left",
    disablePadding: false,

    label: "Status",
  },
];

// ==============================|| ORDER TABLE - HEADER ||============================== //

function OrderTableHead({ order, orderBy }: any) {
  return (
    <TableHead>
      <TableRow sx={{ background: "#e78cd9" }}>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.align as any}
            sx={{ paddingTop: "16px", paddingBottom: "14px" }}
            // padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            {headCell.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

// ==============================|| ORDER TABLE - STATUS ||============================== //

const OrderStatus = ({ status }: any) => {
  let color;
  let title;

  switch (status) {
    case 0:
      color = "warning";
      title = "Mis-aligned";
      break;
    case 1:
      color = "success";
      title = "Healthy";
      break;
    case 2:
      color = "error";
      title = "Rejected";
      break;
    default:
      color = "primary";
      title = "None";
  }

  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <Dot color={color} />
      <Typography>{title}</Typography>
    </Stack>
  );
};
// ==============================|| ORDER TABLE ||============================== //

export default function OrderTable() {
  const [order] = useState("asc");
  const [orderBy] = useState("trackingNo");
  const [selected] = useState([]);

  const isSelected = (trackingNo: any) => false;

  return (
    <Box>
      <TableContainer
        sx={{
          width: "100%",
          overflowX: "auto",
          position: "relative",
          display: "block",
          maxWidth: "100%",
          "& td, & th": { whiteSpace: "nowrap" },
        }}
      >
        <Table
          aria-labelledby="tableTitle"
          sx={{
            "& .MuiTableCell-root:first-child": {
              pl: 2,
            },
            "& .MuiTableCell-root:last-child": {
              pr: 3,
            },
          }}
        >
          <OrderTableHead order={order} orderBy={orderBy} />
          <TableBody>
            {stableSort(towersDataTable, getComparator(order, orderBy)).map(
              (row: any, index: number) => {
                const isItemSelected = isSelected(row.trackingNo);
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow
                    hover
                    role="checkbox"
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.antenna_number}
                    selected={isItemSelected}
                  >
                    <TableCell
                      component="th"
                      id={labelId}
                      scope="row"
                      align="left"
                    >
                      <Link
                        color="secondary"
                        component={RouterLink}
                        to={"/tower/" + row.antenna_number}
                      >
                        {row.antenna_number}
                      </Link>
                    </TableCell>
                    <TableCell align="left">{row.model}</TableCell>
                    <TableCell align="left">{row.latitude}</TableCell>
                    <TableCell align="left">{row.longitude}</TableCell>
                    <TableCell align="left">{row.site_address}</TableCell>
                    <TableCell align="left">{row.carrier}</TableCell>
                    <TableCell align="left">{row.sector}</TableCell>
                    <TableCell align="left">{row.position}</TableCell>

                    {/* <TableCell align="right">
                      <NumberFormat
                        value={row.protein}
                        displayType="text"
                        thousandSeparator
                        prefix="$"
                      />
                    </TableCell> */}
                    <TableCell align="left">
                      <OrderStatus status={row.status} />
                    </TableCell>
                  </TableRow>
                );
              }
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
