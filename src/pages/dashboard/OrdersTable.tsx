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
  antenna_number: any,
  model: any,
  latitude: any,
  longitude: any,
  site_address: any,
  carrier: any,
  sector: any,
  position: any,
  status: any
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
  };
}

const rows = [
  createData(
    24223,
    "Set1",
    43.4926827,
    -112.1037469,
    "Buenos Aires",
    "Sample",
    "Sector 1",
    "50 deg",
    0
  ),
  createData(
    545535,
    "RF Elements A60",
    40.649096,
    -73.964303,
    "site 4363278B",
    "T Mobile",
    "1",
    "1",
    0
  ),
];

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
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.align as any}
            padding={headCell.disablePadding ? "none" : "normal"}
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
            {stableSort(rows, getComparator(order, orderBy)).map(
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
