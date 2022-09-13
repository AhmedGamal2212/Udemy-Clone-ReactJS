import React, { useContext } from "react";
import Card from "../card/Card";
import styles from "./CoursesContainer.module.css";
import { SearchTermContext } from "../../App";

const CoursesContainer = ({ courses }) => {
  const searchTerm = useContext(SearchTermContext).toLowerCase();

  const coursesCards = courses
    .filter((course) => course.title.toLowerCase().includes(searchTerm))
    .map((course) => {
      return <Card key={course.id} course={course}></Card>;
    });

  return (
    <>
      <section className={styles.container}>
        {coursesCards.length ? (
          coursesCards
        ) : (
          <p className={styles.emptyCoursesList}>There're no courses to show</p>
        )}
      </section>
    </>
  );
};

export default CoursesContainer;
