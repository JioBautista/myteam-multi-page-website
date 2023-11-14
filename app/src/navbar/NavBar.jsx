import React from "react";
import styles from "./navbar.module.scss";
import { Link } from "react-router-dom";

function NavBar() {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <Link to="/">
            <img src="src/assets/logo.svg" />
          </Link>

          <Link to="/" className={styles.navlink}>
            home
          </Link>

          <Link to="about" className={styles.navlink}>
            about
          </Link>

          <Link to="contact" className={styles.navbtn}>Contact Us</Link>
          <img
            src="src/assets/icon-hamburger.svg"
            onClick={() => setIsOpen(!false)}
          />

          {isOpen && (
            <div className={styles.sidebar}>
              <img
                src="src/assets/icon-close.svg"
                onClick={() => setIsOpen(false)}
              />
              <Link to="/">home</Link>
              <Link to="about">about</Link>
              <Link to="contact" className={`${styles.navbtn} ${styles.display}`}>Contact Us</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default NavBar;
