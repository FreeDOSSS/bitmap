import React from "react";
import * as styles from "./Footer.module.scss";
import { Link } from "react-router-dom";
import router from "../../helper/router";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.logo}>
        <Link to={router.home.path} className={styles.link}>
          AppCo
        </Link>{" "}
      </p>
      <p className={styles.copyrights}>All rights reserved by ThemeTags</p>
      <p className={styles.copyrights}>Copyrights © 2019. </p>
    </footer>
  );
};

export default Footer;
