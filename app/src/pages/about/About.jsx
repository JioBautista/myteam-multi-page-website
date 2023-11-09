import React from "react";
import styles from "../../styles/about.module.scss";
import Overview from "./Overview";
import Director from "./Director";

function About() {
  return (
    <div className={styles.container}>
      <Overview />
      <Director />
    </div>
  );
}

export default About;
