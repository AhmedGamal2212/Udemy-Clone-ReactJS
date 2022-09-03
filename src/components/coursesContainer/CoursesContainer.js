import React, { Component } from 'react'
import Card from '../card/Card';
import styles from './CoursesContainer.module.css'

class CoursesContainer extends Component {
    
    render() {
        const coursesCards = this.props.courses.map((course) => {
            return <Card key={course.id} course={course}></Card>
        });
        return (
            <section className={styles.container}>
                {coursesCards}
            </section>
        )
    }
}

export default CoursesContainer