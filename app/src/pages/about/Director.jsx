import React from "react";
import styles from "../../styles/about.module.scss";
import CrossButton from "./CrossButton";
import data from "../../data/directors-data";

function Director() {

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
                    <CrossButton  name={items.name} />
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
