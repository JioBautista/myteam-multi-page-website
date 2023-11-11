import React from "react";
import styles from '../../styles/contact.module.scss'

function Ask() {
  return (
    <div className={styles.ask}>
      <h2>Contact</h2>
      <h3>Ask us about</h3>
      <div>
        <div className={styles.icons}>
          <img src="src/assets/icon-person.svg" />
          <p>The quality of our talent network</p>
        </div>

        <div className={styles.icons}>
          <img src="src/assets/icon-cog.svg" />
          <p>Usage & implementation of our software</p>
        </div>

        <div className={styles.icons}>
          <img src="src/assets/icon-chart.svg" />
          <p>How we help drive innovation</p>
        </div>
      </div>
    </div>
  );
}

export default Ask;
