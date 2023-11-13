import React from "react";
import data from "../../data/success-data";
import styles from "../../styles/home.module.scss";

function Success() {
  return (
    <div className={styles.success}>
      <img src="src/assets/bg-pattern-home-4-about-3.svg" />

      <div className={styles.wrapper}>
        <div className={styles.content}>
          <h2>
            Delivering real results for top companies. Some of our{" "}
            <span>success stories</span>
          </h2>
          <div className={styles.avatars}>
            {data.map((items) => {
              return (
                <>
                  <div className={styles.avatar}>
                    <p>{items.comment}</p>
                    <h3>{items.name}</h3>
                    <p>{items.title}</p>

                    <div className={styles.userIcon}>
                      <img src={items.avatar} />
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>

      <img src="src/assets/bg-pattern-home-5.svg" />
    </div>
  );
}

export default Success;
