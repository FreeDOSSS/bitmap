import React from "react";
import Container from "../../components/Container/Container";

import * as styles from "./Home.module.scss";
import { Link } from "react-router-dom";
import router from "../../helper/router";

import iphoneImg from "../../images/mobile.png";
import data from "../../images/data.png";
import retina from "../../images/retina.png";
import disign from "../../images/disign.png";

const Home = () => {
  return (
    <>
      <Container NameClass={styles.header}>
        <header>
          <div className={styles.logo}>AppCo</div>
          <div className="uk-grid uk-child-width-1-1 uk-child-width-1-2@s">
            <div className={styles.discription}>
              <h1 className={styles.title}>
                <strong>Brainstorming</strong> for desired perfect Usability
              </h1>
              <h2 className={styles.subtitle}>
                Our design projects are fresh and simple and will benefit your
                business greatly. Learn more about our work!
              </h2>
              <Link to={router.stats.path} className={styles.link}>
                View stats
              </Link>
            </div>
            <div className="uk-flex uk-flex-center">
              <img
                src={iphoneImg}
                alt="iphone"
                //   height="559"
                className={styles.img}
              />
            </div>
          </div>
        </header>
      </Container>
      <Container NameClass={styles.about}>
        <h3 className={styles.title}>
          Why <strong>small business owners love</strong> AppCo?
        </h3>

        <p className={styles.subtitle}>
          Our design projects are fresh and simple and will benefit your
          business greatly. Learn more about our work!
        </p>
        <div className="uk-grid uk-child-width-1-1 uk-child-width-1-3@s">
          <div className={styles.card}></div>
          <div className={styles.card}></div>
          <div className={styles.card}></div>
        </div>
      </Container>
    </>
  );
};

export default Home;
