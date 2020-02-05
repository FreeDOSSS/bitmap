import React from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";

import Container from "../../components/Container/Container";
import router from "../../helper/router";
import * as styles from "./Home.module.scss";

import iphoneImg from "../../images/mobile.png";
import data from "../../images/data.png";
import retina from "../../images/retina.png";
import disign from "../../images/disign.png";

import basic from "../../images/basic.png";
import standart from "../../images/standart.png";
import unlimited from "../../images/unlimited.png";
import Subscribe from "../../components/Subcribe/Subscribe";
import Footer from "../../components/Footer";

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
              <Link to={router.users.path} className={styles.link}>
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
        <div className={styles.cardBox}>
          <div className={styles.card}>
            <img src={disign} alt="Clean Design" width="106" />
            <h3 className={styles.card__title}>Clean Design</h3>
            <p className={styles.card__description}>
              Increase sales by showing true dynamics of your website.
            </p>
          </div>
          <div className={styles.card}>
            <img src={data} alt="Secure Data" width="106" />
            <h3 className={styles.card__title}>Secure Data</h3>
            <p className={styles.card__description}>
              Build your online store’s trust using Social Proof & Urgency.
            </p>
          </div>
          <div className={styles.card}>
            <img src={retina} alt="Retina Ready" width="106" />
            <h3 className={styles.card__title}>Retina Ready</h3>
            <p className={styles.card__description}>
              Realize importance of social proof in customer’s purchase
              decision.
            </p>
          </div>
        </div>
      </Container>
      <Container NameClass={styles.start}>
        <div
          className={clsx(
            styles.box,
            "uk-grid uk-child-width-1-1 uk-child-width-1-2@m"
          )}
        >
          <div className={styles.discription}>
            <h3 className={styles.title}>
              Start Managing your apps business, more faster
            </h3>

            <p className={styles.subtitle}>
              Objectively deliver professional value with diverse web-readiness.
              Collaboratively transition wireless customer service without
              goal-oriented catalysts for change. Collaboratively.
            </p>

            <Link to={router.stats.path} className={styles.link}>
              Lorm more
            </Link>
          </div>
          <div className={styles.mac}></div>
        </div>
      </Container>
      <Container NameClass={styles.priceWrp}>
        <section className={styles.price}>
          <h2 className={styles.title}>
            <strong>Afforadble Pricing and Packages</strong> choose your best
            one
          </h2>
          <p className={styles.subtitle}>
            Monotonectally grow strategic process improvements vis-a-vis
            integrated resources.
          </p>

          <div className={styles.cardBox}>
            <div className={styles.card}>
              <h3 className={styles.card__title}>Basic</h3>
              <div className={styles.card__imgWrp}>
                <img src={basic} alt="Basic" />
              </div>
              <p className={styles.card__price}>$29</p>
              <div className={styles.spacer}></div>
              <ul className={styles.card__list}>
                <li className={styles.card__list__item}> Push Notifications</li>
                <li className={styles.card__list__item}> Data Transfer</li>
                <li className={styles.card__list__item}> SQL Database</li>
                <li className={styles.card__list__item}>
                  Search & SEO Analytics
                </li>
                <li className={styles.card__list__item}> 24/7 Phone Support</li>
                <li className={styles.card__list__item}>
                  2 months technical support
                </li>
                <li className={styles.card__list__item}>
                  2+ profitable keyword{" "}
                </li>
              </ul>
            </div>
            <div className={styles.card}>
              <h3 className={styles.card__title}>Standart</h3>
              <div className={styles.card__imgWrp}>
                <img src={standart} alt="Standart" />
              </div>
              <p className={styles.card__price}>$149</p>
              <div className={styles.spacer}></div>
              <ul className={styles.card__list}>
                <li className={styles.card__list__item}> Push Notifications</li>
                <li className={styles.card__list__item}> Data Transfer</li>
                <li className={styles.card__list__item}> SQL Database</li>
                <li className={styles.card__list__item}>
                  Search & SEO Analytics
                </li>
                <li className={styles.card__list__item}> 24/7 Phone Support</li>
                <li className={styles.card__list__item}>
                  2 months technical support
                </li>
                <li className={styles.card__list__item}>
                  2+ profitable keyword{" "}
                </li>
              </ul>
            </div>
            <div className={styles.card}>
              <h3 className={styles.card__title}>Unlimited</h3>
              <div className={styles.card__imgWrp}>
                <img src={unlimited} alt="Unlimited" />
              </div>
              <p className={styles.card__price}>$39</p>
              <div className={styles.spacer}></div>
              <ul className={styles.card__list}>
                <li className={styles.card__list__item}> Push Notifications</li>
                <li className={styles.card__list__item}> Data Transfer</li>
                <li className={styles.card__list__item}> SQL Database</li>
                <li className={styles.card__list__item}>
                  Search & SEO Analytics
                </li>
                <li className={styles.card__list__item}> 24/7 Phone Support</li>
                <li className={styles.card__list__item}>
                  2 months technical support
                </li>
                <li className={styles.card__list__item}>
                  2+ profitable keyword{" "}
                </li>
              </ul>
            </div>
          </div>

          <p className={styles.linkToContact}>
            If you need custom services or Need more?{" "}
            <Link to="#" className={styles.link}>
              Contact Us
            </Link>
          </p>
        </section>
      </Container>
      <Container NameClass={styles.footer}>
        <Subscribe />
        <Footer />
      </Container>
    </>
  );
};

export default Home;
