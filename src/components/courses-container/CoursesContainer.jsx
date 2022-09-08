import React from 'react'
import Card from '../card/Card';
import styles from './CoursesContainer.module.css'

const CoursesContainer = (props) => {
    const coursesCards = props.courses.map((course) => {
        return <Card key={course.id} course={course}></Card>;
    });
    return (
        <section className={styles.container}>
            {coursesCards}
        </section>
    );
}

export default CoursesContainer
