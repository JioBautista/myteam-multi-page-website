import React from "react";
import Button from "../../components/Button";
import styles from "../../styles/home.module.scss";

function Ready() {
  return (
    <div className={styles.ready}>
      <h2>Ready to get started?</h2>
      <Button>contact us</Button>
    </div>
  );
}

export default Ready;
