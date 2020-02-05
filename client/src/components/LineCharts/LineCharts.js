import React from "react";
import Chart from "react-apexcharts";

const LineChart = ({ x, y, width, height, name }) => {
  const options = {
    chart: {
      id: "basic-line"
    },
    xaxis: {
      categories: y
    },
    stroke: {
      curve: "smooth"
    }
  };
  const series = [
    {
      name,
      data: x
    }
  ];
  return (
    <Chart
      options={options}
      series={series}
      type="line"
      width={width}
      height={height}
    />
  );
};

export default LineChart;
