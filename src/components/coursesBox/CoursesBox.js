import React from 'react'
import CoursesContainer from '../coursesContainer/CoursesContainer'
import styles from './CoursesBox.module.css'

const CoursesBox = (props) => {
  return (
      <section className={styles.wrapper}>
          <h2 className={styles.title}>{props.title}</h2>
          <p className={styles.description}>{props.description}</p>
          <button className={styles.exploreButton}>Explore Date Science</button>
          <CoursesContainer courses={props.courses}></CoursesContainer>
      </section>
  );
}

export default CoursesBox
