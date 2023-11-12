import React from "react";
import styles from "../../styles/about.module.scss";
import data from "../../data/directors-data";

function Director() {
  return (
    <div className={styles.director}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <h2>Meet the directors</h2>
          <div className={styles.avatars}>
            {data.map((items) => {
              return (
                <>
                  <div className={styles.avatar}>
                    <div className={styles.userImg}>
                      <img src={items.avatar} />
                    </div>
                    <h3>{items.name}</h3>
                    <p>{items.title}</p>
                    <div className={styles.cross}>
                      <img src="src/assets/icon-cross.svg" />
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Director;
