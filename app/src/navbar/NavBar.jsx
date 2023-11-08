import React from "react";
import styles from "./navbar.module.scss";

function NavBar() {
  return (
    <div className={styles.container}>
      <img src="src/assets/logo.svg" />
      <img src="src/assets/icon-hamburger.svg" />
    </div>
  );
}

export default NavBar;
