import React from "react";
import * as styles from "./Subscribe.module.scss";
const Subsribe = () => {
  const hendlerForm = evt => {
    evt.preventDefault();
    // const { target } = evt;
  };

  return (
    <form onSubmit={hendlerForm} className={styles.form}>
      <input
        type="text"
        placeholder="Enter your email"
        required
        className={styles.field}
      />
      <input className={styles.submit} type="submit" value="Subscribe" />
    </form>
  );
};

export default Subsribe;
