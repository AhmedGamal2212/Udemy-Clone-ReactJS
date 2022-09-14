import React from "react";
import styles from "./SingleCourseHeader.module.css";
import "./iconStyle.css";

function SingleCourseHeader({ courseDetails }) {
  const { title, image_750x422: image, headline } = courseDetails;
  return (
    <>
      <main className={styles.mainContainer}>
        <section className={styles.categoriesSection}>
          <p className={styles.subCategory}>Development</p>
          <i className="fa-solid fa-chevron-right sub-category-arrow"></i>
          <p className={styles.subCategory}>Programming Languages</p>
        </section>
        <section className={styles.coursePreview}>
          <figure className={styles.imageWrapper}>
            <img src={image} alt={courseDetails.category} />
          </figure>
          <section className={styles.mainDetails}>
            <h3>{title}</h3>
            <p>{headline}</p>
          </section>
        </section>
      </main>
    </>
  );
}

export default SingleCourseHeader;
