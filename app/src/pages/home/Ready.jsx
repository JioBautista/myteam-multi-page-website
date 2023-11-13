import React from "react";
import Button from "../../components/Button";
import styles from "../../styles/home.module.scss";

function Ready() {
  return (
    <div className={styles.ready}>

      <div className={styles.wrapper}>
        <div className={styles.content}>
          <h2>Ready to get started?</h2>
          <Button>contact us</Button>
        </div>
      </div>
    </div>
  );
}

export default Ready;
