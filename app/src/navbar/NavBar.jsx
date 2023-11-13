import React from "react";
import styles from "./navbar.module.scss";
import Button from "../components/Button";
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
          <button to="contact" className={styles.navbtn}>
            <Link to="contact">Contact Us</Link>
          </button>
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
              <Button to="contact">
                {" "}
                <Link to="contact">Contact Us</Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default NavBar;
