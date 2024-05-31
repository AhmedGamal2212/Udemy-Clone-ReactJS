import React from 'react';
import styles from './ReviewCard.module.css';
import StarsRating from '../stars-rating/StarsRating';
import HTMLReactParser from 'html-react-parser';
import {ThumbDownOffAlt, ThumbUpOffAlt} from '@mui/icons-material';

function ReviewCard({review}) {
    const {created_formatted_with_time_since: since, content_html: content} =
        review;
    const {user} = review;
    const {public_display_name: username} = user;

    return (
        <main className={styles.mainContainer}>
            <p className={styles.userName}>{username}</p>
            <div className={styles.rating}>
                <div className={styles.wrapper}>
                    <StarsRating
                        rating={parseInt(review.rating)}
                        fontSize='1rem'
                    />
                </div>
                <p className={styles.postingTime}>{since}</p>
            </div>
            {HTMLReactParser(content)}
            <p>Was this review helpful?</p>
            <p className={styles.footer}>
                <button className={styles.buttonIcon}>
                    <ThumbUpOffAlt className={styles.icons}/>
                </button>
                <button className={styles.buttonIcon}>
                    <ThumbDownOffAlt className={styles.icons}/>
                </button>
                <span className={styles.report}>Report</span>
            </p>
        </main>
    );
}

export default ReviewCard;
