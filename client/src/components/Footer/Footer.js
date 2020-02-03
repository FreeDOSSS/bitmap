import React from "react";
import * as styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.logo}>AppCo</p>
      <p className={styles.copyrights}>All rights reserved by ThemeTags</p>
      <p className={styles.copyrights}>Copyrights © 2019. </p>
    </footer>
  );
};

export default Footer;
