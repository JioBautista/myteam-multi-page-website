import React from "react";
import styles from "../../styles/home.module.scss";

function Talent() {
  return (
    <div className={styles.talent}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <h1>
            Find the best <span>talent</span>
          </h1>
          <p>
            Finding the right people and building high performing teams can be
            hard. Most companies aren't tapping into the abundance of global
            talent. We're about to change that.
          </p>
        </div>
        <img src="src/assets/bg-pattern-home-2.svg"/>
      </div>
    </div>
  );
}

export default Talent;
