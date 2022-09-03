import React, { Component } from 'react'
import CoursesContainer from '../coursesContainer/CoursesContainer'
import styles from './CoursesBox.module.css'


class CoursesBox extends Component {
  render() {

    return (
        <section className={styles.wrapper}>
            <h2 className={styles.title}>{this.props.title}</h2>
            <p className={styles.description}>{this.props.description}</p>

            <button className={styles.exploreButton}>Explore Date Science</button>
            <CoursesContainer courses={this.props.courses}></CoursesContainer>
        </section>
    )
  }
}

export default CoursesBox