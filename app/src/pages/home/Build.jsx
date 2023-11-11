import React from "react";
import data from "../../data/build-data";
import styles from "../../styles/home.module.scss";

function Build() {
  return (
    <div className={styles.build}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <h2>Build & manage distributed teams like no one else.</h2>
          <div>
            {data.map((items) => {
              return (
                <>
                  <div className={styles.buildcontent}>
                    <img src={items.icon} />
                    <div>
                      <h3>{items.title}</h3>
                      <p>{items.description}</p>
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

export default Build;
