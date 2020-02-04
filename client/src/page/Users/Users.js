import React from "react";
import Container from "../../components/Container/Container";
import * as styles from "./Users.module.scss";
import TableUsers from "../../components/TableUsers";
import router from "../../helper/router";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";

const Users = props => {
  // const hendlerRow = id => {
  //   props.history.push(`${router.users.path}/${id}`);
  // };
  return (
    <>
      <Container NameClass={styles.logo}>AppCo</Container>

      <Container>
        <div className={styles.webPath}>
          <Link to={router.home.path} className={styles.prevPage}>
            Main Page
          </Link>
          <div className={styles.arrow}></div>
          <Link to={matchMedia.path} className={styles.linkCurrent}>
            User statistics
          </Link>
        </div>
      </Container>

      <Container>
        <h1 className={styles.title}>User statistics</h1>
      </Container>
      <Container className={styles.tableStatisctic}>
        <TableUsers />
      </Container>

      <Container NameClass={styles.footer}>
        <Footer />
      </Container>
    </>
  );
};

export default Users;
