import React, { useState, useEffect } from "react";
import styles from "./SingleCourseHeader.module.css";
import "./iconStyle.css";
import { Link } from "react-router-dom";
import LoadingSpinner from "../loading-spinner/LoadingSpinner";
import StarsRating from "../stars-rating/StarsRating";

function SingleCourseHeader({ courseDetails }) {
  const {
    title,
    image_750x422: image,
    headline,
    rating,
    num_subscribers: subscribers,
    visible_instructors: instructors,
    last_update_date: lastUpdate,
  } = courseDetails;

  const [fetched, setAsFetched] = useState(false);
  const [additionalDetails, setAdditionalDetails] = useState({});

  const [year, month] = lastUpdate.split("-");
  const date = new Date(year, month - 1);

  useEffect(() => {
    fetch("https://api.npoint.io/427e24cf2470da9aecca")
      .then((response) => response.json())
      .then((jsonFile) => {
        setAdditionalDetails(jsonFile);
        setAsFetched(true);
      });
  }, []);

  return fetched ? (
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
            <StarsRating rating={rating} />
            <p className={styles.linkLikeText}>(2,305 ratings)</p>
            <p style={{ display: "inline-block", marginLeft: "7px" }}>
              {subscribers} students
            </p>
            <p>
              Created by{" "}
              <span className={styles.linkLikeText}>
                {instructors.map((instructor) => instructor.name).join(", ")}
              </span>
            </p>
            <p>
              <i className="fa-solid fa-circle-exclamation"></i>
              <span className={styles.lastUpdate}>
                Last updated  
                <span className={styles.lastUpdateDate}>{date.getMonth() + 1}/{date.getFullYear()}</span>
              </span>
            </p>
          </section>
        </section>
      </main>
    </>
  ) : (
    <LoadingSpinner />
  );
}

export default SingleCourseHeader;
