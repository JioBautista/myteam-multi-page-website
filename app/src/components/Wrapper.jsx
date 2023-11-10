import React from "react";
import styles from "./components.module.scss";

function Wrapper({ children }) {
  return <div className={styles.wrapper}>{children}</div>;
}

export default Wrapper;
