import React, { useState, useEffect } from "react";
import * as styles from "./Statictics.module.scss";
import Container from "../../components/Container/Container";

import axios from "axios";
import constants from "../../helper/constants";
import LineChart from "../../components/LineCharts";
import { Link } from "react-router-dom";
import router from "../../helper/router";
import Footer from "../../components/Footer";

const Statictics = ({ match }) => {
  const [clicks, setClicks] = useState(null);
  const [views, setViews] = useState(null);
  const [data, setData] = useState(null);
  const [datain, setDatain] = useState("2019-10-02");
  const [dataout, setDataout] = useState("2019-10-09");
  const [user, setUser] = useState("2019-10-20");

  const { id } = match.params;

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
        data.stats.forEach(el => {
          arrClicks.push(el.clicks);
          arrData.push(el.date);
          arrViews.push(el.page_views);
        });
        setClicks(arrClicks);
        setViews(arrViews);
        setUser(`${data.user.first_name} ${data.user.last_name}`);
        setData(arrData);
      });
  }, [id, datain, dataout]);

  const handlerDataIn = ({ target }) => {
    const { value } = target;

    setDatain(value < dataout ? value : datain);
  };
  const handlerDataOut = ({ target }) => {
    const { value } = target;

    setDataout(value > datain ? value : dataout);
  };

  return (
    <>
      <Container NameClass={styles.logo}>
        <Link to={router.home.path} className={styles.link}>
          {" "}
          AppCo
        </Link>
      </Container>
      {data && (
        <>
          <Container>
            <div className={styles.webPath}>
              <Link to={router.home.path} className={styles.prevPage}>
                Main Page
              </Link>
              <div className={styles.arrow}></div>
              <Link to={router.users.path} className={styles.prevPage}>
                User statistics
              </Link>
              <div className={styles.arrow}></div>
              <Link to={router.stats.path} className={styles.linkCurrent}>
                {user}
              </Link>
            </div>
          </Container>
          <Container>
            <h1>
              <strong>{user}</strong>
            </h1>
            <div className={styles.select}>
              <input type="date" value={datain} onChange={handlerDataIn} />
              <input type="date" value={dataout} onChange={handlerDataOut} />
            </div>
            <h3> Cliks</h3>
            <LineChart
              width={"100%"}
              height={200}
              x={clicks}
              y={data}
              name={"Cliks"}
            />
            <h3> Views</h3>
            <LineChart
              width={"100%"}
              height={200}
              x={views}
              y={data}
              name={"Views"}
            />
          </Container>
        </>
      )}
      <Container NameClass={styles.footer}>
        <Footer />
      </Container>
    </>
  );
};

export default Statictics;
