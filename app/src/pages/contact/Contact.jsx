import React from "react";
import Ask from "./Ask";
import styles from "../../styles/contact.module.scss";

function Contact() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <Ask />
        </div>
      </div>
    </div>
  );
}

export default Contact;
