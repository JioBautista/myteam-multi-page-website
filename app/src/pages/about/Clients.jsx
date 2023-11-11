import React from "react";
import styles from "../../styles/about.module.scss";

function Clients() {
  return (
    <div className={styles.clients}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <h2>Some of our clients</h2>
          <div className={styles.icons}>
            <img src="src/assets/logo-the-verge.png" />
            <img src="src/assets/logo-jakarta-post.png" />
            <img src="src/assets/logo-the-guardian.png" />
            <img src="src/assets/logo-tech-radar.png" />
            <img src="src/assets/logo-gadgets-now.png" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Clients;
