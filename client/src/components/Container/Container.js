import React from "react";
import * as styled from "./Container.module.scss";
const Container = ({ NameClass, children }) => {
  return (
    <div className={NameClass ? NameClass : null}>
      <div className={styled.container}>{children ? children : null}</div>
    </div>
  );
};

export default Container;
