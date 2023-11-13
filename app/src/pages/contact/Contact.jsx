import React from "react";
import Ask from "./Ask";
import Form from "./Form";
import styles from "../../styles/contact.module.scss";

function Contact() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
          <Ask />
          <Form />
        </div>
    </div>
  );
}

export default Contact;
