import React, { useState, useEffect } from "react";
import * as styles from "./Statictics.module.scss";
import Container from "../../components/Container/Container";
import Chart from "react-apexcharts";
import axios from "axios";
import constants from "../../helper/constants";

const Statictics = ({ match }) => {
  const [clicks, setClicks] = useState(null);
  const [views, setViews] = useState(null);
  const [data, setData] = useState(null);
  const [datain, setDatain] = useState("2019-10-02");
  const [dataout, setDataout] = useState("2019-10-30");

  const { id } = match.params;

  const options = {
    chart: {
      id: "basic-line"
    },
    xaxis: {
      categories: data
    },
    stroke: {
      curve: "smooth"
    }
  };
  const series = [
    {
      name: "clicks",
      data: clicks
    }
  ];

  useEffect(() => {
    axios
      .get(
        constants.getUrl +
          "/" +
          id +
          "?datain=" +
          datain +
          "&dataout=" +
          dataout
      )
      .then(({ data }) => {
        const arrClicks = [];
        const arrData = [];
        const arrViews = [];
        data.forEach(el => {
          arrClicks.push(el.clicks);
          arrData.push(el.date);
          arrViews.push(el.page_views);
        });
        setData(arrData);
        setClicks(arrClicks);
        setViews(arrViews);
      });
  }, []);

  return (
    <>
      <Container NameClass={styles.logo}>AppCo</Container>
      {/* <LineChart
        width={400}
        height={400}
        data={data}
        margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
        >
        <XAxis dataKey="name" />
        <Tooltip />
        <CartesianGrid stroke="#f5f5f5" />
        <Line type="monotone" dataKey="uv" stroke="#ff7300" yAxisId={0} />
        <Line type="monotone" dataKey="pv" stroke="#387908" yAxisId={1} />
      </LineChart> */}
      <Container>
        {clicks && (
          <Chart options={options} series={series} type="line" width="100%" />
        )}
      </Container>
    </>
  );
};

export default Statictics;
