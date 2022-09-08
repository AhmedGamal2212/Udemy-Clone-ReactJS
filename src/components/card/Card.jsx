import React from 'react'
import styles from './Card.module.css'

const Card = ({course}) => {
    const {headline:title, visible_instructors, image_304x171:image, rating} = course;
    const instructors = visible_instructors.map(instructor => instructor.title).join(', ');
    return (
        <>
            <div className={styles.courseWrapper}>
                <article className={styles.card}>
                    <figure className={styles.wrapper}>
                        <img src={image} alt="" />
                    </figure>
                    <section className={styles.body}>
                        <p className={styles.title}>
                            {title}
                        </p>
                        <p className={styles.instructors}>
                            {instructors}
                        </p>
                        <section>
                            <p className={styles.rating}>{rating.toPrecision(2)}</p>
                            <div className={styles.starsOuter}>
                                <div className={styles.starsInner} style={{width:`${rating / 5 * 100}%`}}></div>
                            </div>
                        </section>
                        <p className={styles.price}>
                            $15
                        </p>
                    </section>
                </article>
            </div>
        </>
    );
}

export default Card
