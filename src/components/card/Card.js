import React, { Component } from 'react'
import styles from './Card.module.css'

class Card extends Component {
    createCourse(course){
        let instructors = ``;
        course.instructors.forEach((instructor) => {
            instructors += ' ' + instructor['name'] + ',';
        });
        instructors = instructors.slice(0, -1);
        return (
            <>
                <div className={styles.courseWrapper}>
                    <article className={styles.card}>
                        <figure className={styles.wrapper}>
                            <img src={course.image} alt="" />
                        </figure>
                        <section className={styles.body}>
                            <h3 className={styles.title}>
                                {course.title}
                            </h3>
                            <p className={styles.instructors}>
                                {instructors}
                            </p>
                            <section>
                                <p className={styles.rating}>{course.rating.toPrecision(2)}</p>
                                <div className={styles.starsOuter}>
                                    <div className={styles.starsInner} style={{width:`${course.rating / 5 * 100}%`}}></div>
                                </div>
                            </section>
                            <p className={styles.price}>
                                ${course.price}
                            </p>
                        </section>
                    </article>
                </div>
            </>
        )
    }

    render() {
        console.log(typeof(this.props.course));
        return (
            <>{this.createCourse(this.props.course)}</>
        )
    }
}

export default Card
