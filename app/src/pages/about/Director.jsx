import React from "react";
import styles from "../../styles/about.module.scss";
import data from "../../data/directors-data";

function Director() {
  const [isActive, setIsActive] = React.useState(false);

  const handleClick = () => {
    setIsActive(!isActive)
  };

  return (
    <div className={styles.director}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <h2>Meet the directors</h2>
          <div className={styles.avatars}>
            {data.map((items, index) => {
              return (
                <React.Fragment key={items.id}>
                  <div className={styles.avatar}>
                    <div className={styles.userImg}>
                      <img src={items.avatar} />
                    </div>
                    <h3>{items.name}</h3>
                    <p>{items.title}</p>
                    <div
                      className={`${styles.cross} ${isActive ? styles.active : ''}`}
                      onClick={handleClick}
                    >
                      <img src="src/assets/icon-cross.svg" />
                    </div>
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Director;
