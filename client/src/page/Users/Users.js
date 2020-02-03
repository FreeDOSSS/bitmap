import React from "react";
import Container from "../../components/Container/Container";
import * as styles from "./Users.module.scss";
import TableUsers from "../../components/TableUsers";

const Users = () => {
  return (
    <>
      <Container NameClass={styles.logo}>AppCo</Container>
      <TableUsers />
    </>
  );
};

export default Users;
