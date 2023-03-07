import { useState, useEffect } from "react";

// material-ui
import { Theme, useTheme } from "@mui/material/styles";

// third-party
import ReactApexChart from "react-apexcharts";

// chart options
const areaChartOptions = {
  chart: {
    height: 450,
    type: "area",
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
    width: 2,
  },
  grid: {
    strokeDashArray: 0,
  },
};

// ==============================|| INCOME AREA CHART ||============================== //

const IncomeAreaChart = ({ slot }: any) => {
  const theme: Theme = useTheme();

  const { primary, secondary } = theme.palette.text;
  const line = theme.palette.divider;

  const [options, setOptions] = useState(areaChartOptions);

  useEffect(() => {
    setOptions((prevState: any) => ({
      ...prevState,
      colors: [theme.palette.error.light, theme.palette.success.light],
      xaxis: {
        categories:
          slot === "day"
            ? [
                1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
                19, 20, 21, 22, 23, 24,
              ]
            : slot === "month"
            ? [
                1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
                19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
              ]
            : slot === "year"
            ? ["2020", "2021", "2022", "2023"]
            : slot === "monthly"
            ? [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
              ]
            : ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        labels: {
          style: {
            colors: [
              secondary,
              secondary,
              secondary,
              secondary,
              secondary,
              secondary,
              secondary,
              secondary,
              secondary,
              secondary,
              secondary,
              secondary,
            ],
          },
        },
        axisBorder: {
          show: true,
          color: line,
        },
        tickAmount:
          slot === "day"
            ? 23
            : slot === "month"
            ? 29
            : slot === "year"
            ? 3
            : slot === "monthly"
            ? 11
            : 7,
      },
      yaxis: {
        labels: {
          style: {
            colors: [secondary],
          },
        },
      },
      grid: {
        borderColor: line,
      },
      tooltip: {
        theme: "light",
      },
    }));
  }, [primary, secondary, line, theme, slot]);

  const [series, setSeries] = useState([
    {
      name: "Misaligned Antennas",
      data: [0, 86, 28, 115, 48, 210, 136],
    },
    {
      name: "Healthy Antennas",
      data: [0, 43, 14, 56, 24, 105, 68],
    },
  ]);

  useEffect(() => {
    setSeries([
      {
        name: "Misaligned Antennas",
        data:
          slot === "day"
            ? [
                76, 85, 101, 98, 87, 105, 91, 114, 94, 98, 87, 105, 91, 114, 94,
                86, 101, 98, 87, 105, 115, 35, 76, 85,
              ]
            : slot === "month"
            ? [
                76, 85, 101, 98, 87, 105, 91, 114, 94, 86, 115, 35, 76, 85, 101,
                35, 76, 85, 101, 98, 87, 105, 98, 87, 105, 91, 114, 94, 86, 115,
              ]
            : slot === "year"
            ? [489, 290, 786, 576]
            : slot === "monthly"
            ? [76, 85, 101, 98, 87, 105, 91, 114, 94, 86, 115, 35]
            : [31, 40, 28, 51, 42, 109, 100],
      },
      {
        name: "Healthy Antennas",
        data:
          slot === "day"
            ? [
                105, 91, 114, 94, 86, 115, 35, 76, 114, 76, 85, 101, 98, 87, 94,
                86, 115, 35, 76, 85, 101, 98, 87, 105,
              ]
            : slot === "month"
            ? [
                105, 91, 114, 94, 86, 115, 35, 76, 85, 101, 98, 87, 105, 91,
                114, 76, 85, 101, 98, 87, 94, 86, 115, 35, 76, 85, 101, 98, 87,
                105,
              ]
            : slot === "year"
            ? [890, 456, 90, 1000]
            : slot === "monthly"
            ? [110, 60, 150, 35, 60, 36, 26, 45, 65, 52, 53, 41]
            : [11, 32, 45, 32, 34, 52, 41],
      },
    ]);
  }, [slot]);

  return (
    <ReactApexChart
      options={options as any}
      series={series}
      type="area"
      height={300}
    />
  );
};
export default IncomeAreaChart;
