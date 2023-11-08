import React from "react";
import Talent from "./Talent";
import Build from "./Build";
import Success from "./Success";
// import Ready from "./Ready";
import styles from "../../styles/home.module.scss";

function Home() {
  return (
    // PARENT CONTAINER
    <div className={styles.container}>
      {/* CHILD CONTAINERS */}
      <Talent />
      <Build />
      <Success />
      {/* <Ready /> */}
    </div>
  );
}

export default Home;
