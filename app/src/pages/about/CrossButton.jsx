import React from "react";
import styles from "../../styles/about.module.scss";

function CrossButton() {
  const [isActive, setIsActive] = React.useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };
  return (
    <div
      className={`${styles.cross} ${isActive ? styles.active : ""}`}
      onClick={handleClick}
    >
      <img src="src/assets/icon-cross.svg" />
    </div>
  );
}

export default CrossButton;
