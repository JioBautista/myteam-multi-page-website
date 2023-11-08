import React from "react";
import styles from "./footer.module.scss";

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.myteam}>
        <img src="src/assets/logo.svg" />
        <p>home</p>
        <p>about</p>
      </div>

      <div>
        <p>978 Hillcrest Lane</p>
        <p>Irvine, CA</p>
        <p>California 92714</p>
        <p>Call Us: 949-833-7432</p>
      </div>

      <div className={styles.icons}>
        <img src="src/assets/icon-facebook.svg" />
        <img src="src/assets/icon-pinterest.svg" />
        <img src="src/assets/icon-twitter.svg" />
      </div>

      <p>Copyright 2020. All Rights Reserved</p>
    </div>
  );
}

export default Footer;
