import React from "react";
import styles from "../../styles/about.module.scss";
import Overview from "./Overview";
import Director from "./Director";
import Clients from "./Clients";

function About() {
  return (
    <div className={styles.container}>
      <Overview />
      <Director />
      <Clients />
    </div>
  );
}

export default About;
