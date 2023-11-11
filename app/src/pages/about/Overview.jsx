import React from "react";
import styles from "../../styles/about.module.scss";

function Overview() {
  return (
    <div className={styles.overview}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <h2 className={styles.item1}>About</h2>
          <p>
            We help companies build dynamic teams made up of top global talent.
            Using our network of passionate professionals we drive innovation
            and deliver incredible outcomes. Talented, diverse teams shape the
            best products and experiences. We'll bring those teams to you.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Overview;
