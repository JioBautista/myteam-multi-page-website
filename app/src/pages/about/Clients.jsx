import React from "react";
import styles from "../../styles/about.module.scss";

function Clients() {
  return (
    <div className={styles.clients}>
      <h2>Some of our clients</h2>
      <div>
        <img src="src/assets/logo-the-verge.png"/>
      </div>
    </div>
  );
}

export default Clients;
