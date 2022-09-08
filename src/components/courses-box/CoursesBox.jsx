import React from 'react'
import CoursesContainer from '../courses-container/CoursesContainer'
import styles from './CoursesBox.module.css'

const CoursesBox = ({title, description, courses}) => {
  return (
      <section className={styles.wrapper}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.description}>{description}</p>
          <button className={styles.exploreButton}>Explore Date Science</button>
          <CoursesContainer courses={courses}></CoursesContainer>
      </section>
  );
}

export default CoursesBox
