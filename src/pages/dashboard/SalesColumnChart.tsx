import { useEffect, useState } from "react";

// material-ui
import { useTheme } from "@mui/material/styles";

// third-party
import ReactApexChart from "react-apexcharts";

// chart options
const columnChartOptions = {
  chart: {
    type: "bar",
    height: 430,
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      columnWidth: "30%",
      borderRadius: 4,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: true,
    width: 8,
    colors: ["transparent"],
  },
  xaxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  },
  yaxis: {
    title: {
      text: "$ (thousands)",
    },
  },
  fill: {
    opacity: 1,
  },
  tooltip: {
    y: {
      formatter(val: any) {
        // return `$ ${val} thousands`;
        return `${val}`;
      },
    },
  },
  legend: {
    show: true,
    fontFamily: `'Public Sans', sans-serif`,
    // offsetX: 10,
    // offsetY: 10,
    labels: {
      useSeriesColors: false,
    },
    markers: {
      width: 16,
      height: 16,
      radius: "50%",
      offsexX: 2,
      offsexY: 2,
    },
    // itemMargin: {
    //   horizontal: 15,
    //   vertical: 50,
    // },
  },
  responsive: [
    {
      breakpoint: 600,
      options: {
        yaxis: {
          show: false,
        },
      },
    },
  ],
};

// ==============================|| SALES COLUMN CHART ||============================== //

interface Props {
  slot: "year" | "monthly" | "month" | "week" | "day";
}
const SalesColumnChart = ({ slot }: Props) => {
  const theme = useTheme();
  const { primary, secondary } = theme.palette.text;
  const greenColor = theme.palette.success.light;
  const line = theme.palette.divider;

  const warning = theme.palette.warning.main;
  const primaryMain = theme.palette.primary.main;
  const successDark = theme.palette.success.dark;

  const [series, setSeries] = useState([
    {
      name: "Healthy Towers",
      data: [180, 90, 135, 114, 120, 145],
    },
    {
      name: "Mis-aligned Towers",
      data: [120, 45, 78, 150, 168, 99],
    },
  ]);

  const [options, setOptions] = useState(columnChartOptions);

  useEffect(() => {
    setOptions((prevState: any) => ({
      ...prevState,
      colors: [greenColor, warning],
      xaxis: {
        labels: {
          style: {
            colors: [
              secondary,
              secondary,
              secondary,
              secondary,
              secondary,
              secondary,
            ],
          },
        },
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
      // legend: {
      //   position: "top",
      //   horizontalAlign: "right",
      //   labels: {
      //     colors: "grey.500",
      //   },
      // },
    }));

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
  }, [
    primary,
    secondary,
    line,
    warning,
    primaryMain,
    successDark,
    slot,
    greenColor,
  ]);

  return (
    <div id="chart">
      <ReactApexChart
        options={options as any}
        series={series}
        type="bar"
        height={300-30}
      />
    </div>
  );
};

export default SalesColumnChart;
