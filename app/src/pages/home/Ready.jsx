import React from "react";
import styles from "../../styles/home.module.scss";
import { Link } from "react-router-dom";

function Ready() {
  return (
    <div className={styles.ready}>

      <div className={styles.wrapper}>
        <div className={styles.content}>
          <h2>Ready to get started?</h2>
          <Link to="contact">contact us</Link>
        </div>
      </div>
    </div>
  );
}

export default Ready;
