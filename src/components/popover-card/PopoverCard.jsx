import React from "react";
import styles from "./PopoverCard.module.css";
import months from "../../months";
import { Link } from 'react-router-dom';

function PopoverCard({ course }) {
  const [year, month] = course.last_update_date.split("-");
  const date = new Date(year, month - 1);

  const objectives = course.objectives_summary.map((objective, idx) => (
    <p key={idx}>
      <span className={styles.tickIcon}>
        <i className="fa-solid fa-check"></i>
      </span>
      {objective}
    </p>
  ));

  return (
    <div className={styles.cardWrapper}>
      <Link to={`/Udemy-Clone-ReactJS/courses/${course.id}`} className={styles.courseTitle}>
        <p>{course.title}</p>
      </Link>
      <p className={styles.date}>
        Updated{" "}
        <span>
          {months[date.getMonth()]} {date.getFullYear()}
        </span>
      </p>
      <p className={styles.info}>
        {course.content_info} . {course.instructional_level} . Subtitles
      </p>
      <p>{course.headline}</p>
      {objectives}
      <div className={styles.buttonsSection}>
        <button className={styles.addToCart}>Add to cart</button>
        <button className={styles.heartButton}><i className="fa-regular fa-heart"></i></button>
      </div>
    </div>
  );
}

export default PopoverCard;
