import React from "react";
import styles from './StarsRating.module.css'

function StarsRating({rating}) {
  return (
    <>
      <p className={styles.rating}>{rating.toPrecision(2)}</p>
      <div className={styles.starsOuter}>
        <div
          className={styles.starsInner}
          style={{ width: `${(rating / 5) * 100}%` }}
        ></div>
      </div>
    </>
  );
}

export default StarsRating;
