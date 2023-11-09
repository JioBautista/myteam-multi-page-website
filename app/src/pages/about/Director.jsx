import React from "react";
import styles from "../../styles/about.module.scss";
import data from "../../data/directors-data";

function Director() {
  return (
    <div className={styles.director}>
      <h2>Meet the directors</h2>
      <div className={styles.avatars}>
        {data.map((items) => {
          return (
            <>
              <div className={styles.avatar}>
                <img src={items.avatar} />
                <h3>{items.name}</h3>
                <p>{items.title}</p>
                <img src="src/assets/icon-cross.svg" className={styles.cross} />
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Director;
