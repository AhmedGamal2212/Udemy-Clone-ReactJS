import React from 'react';
import styles from './PopoverCard.module.css'
import months from '../../months';

function PopoverCard({course}) {
    const [year, month] = course.last_update_date.split('-');
    const date = new Date(year, month - 1);
    
    return (
        <div className={styles.cardWrapper}>
            <a className={styles.courseTitle} href="">
                <p>{course.title}</p>
            </a>
            <p className={styles.date}>Updated <span>{months[date.getMonth()]} {date.getFullYear()}</span></p>
        </div>
     );
}

export default PopoverCard;