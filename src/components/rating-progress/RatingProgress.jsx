import React from 'react';
import styles from './RatingProgress.module.css';
import StarsRating from '../stars-rating/StarsRating';

function RatingProgress({ percentage, starsCount }) {
	return (
		<div className={styles.row}>
			<div className={styles.bar}>
				<div
					className={styles.progress}
					style={{ width: `${percentage}%` }}
				></div>
			</div>
			<div className={styles.stars}>
				<StarsRating
					rating={starsCount}
					fontSize='1.1rem'
				/>
			</div>
		</div>
	);
}

export default RatingProgress;
