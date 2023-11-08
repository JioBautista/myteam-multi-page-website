import React from "react";
import Talent from "./Talent";
import Build from "./Build";
import styles from "../../styles/home.module.scss";

function Home() {
  return (
    <div className={styles.container}>
      <Talent />
      <Build />
    </div>
  );
}

export default Home;
