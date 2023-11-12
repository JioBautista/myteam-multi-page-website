import React from "react";
import styles from "../../styles/contact.module.scss";

function Form() {
  return (
    <div className={styles.form}>
      <form>
        <input placeholder="Name"></input>
        <input placeholder="Email Address"></input>
        <input placeholder="Company Name"></input>
        <input placeholder="Title"></input>
        <textarea placeholder="Message"></textarea>
        <button>submit</button>
      </form>
    </div>
  );
}

export default Form;
