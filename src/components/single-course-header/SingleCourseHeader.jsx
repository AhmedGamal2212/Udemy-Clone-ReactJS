import React from "react";
import styles from "./SingleCourseHeader.module.css";
import "./iconStyle.css";
import { Link } from "react-router-dom";

function SingleCourseHeader({ courseDetails }) {
  const { title, image_750x422: image, headline, rating } = courseDetails;
  return (
    <>
      <main className={styles.mainContainer}>
        <section className={styles.categoriesSection}>
          <Link to="/ahmedGamal-Project2React/">
            <p className={styles.subCategory}>Home</p>
          </Link>
          <i className="fa-solid fa-chevron-right sub-category-arrow"></i>
          <Link to="/ahmedGamal-Project2ReaIct#courses">
            <p className={styles.subCategory}>courses</p>
          </Link>
        </section>
        <section className={styles.coursePreview}>
          <figure className={styles.imageWrapper}>
            <img src={image} alt={courseDetails.category} />
          </figure>
          <section className={styles.mainDetails}>
            <h3>{title}</h3>
            <p>{headline}</p>
            <p className={styles.rating}>{rating.toPrecision(2)}</p>
              <div className={styles.starsOuter}>
                <div
                  className={styles.starsInner}
                  style={{ width: `${(rating / 5) * 100}%` }}
                ></div>
              </div>
          </section>
        </section>
      </main>
    </>
  );
}

export default SingleCourseHeader;
