import React from 'react';
import StarsRating from '../stars-rating/StarsRating';
import styles from './StudentFeedback.module.css';
import RatingProgress from '../rating-progress/RatingProgress';

function StudentFeedback({ details }) {
	const {
		avg_rating_recent: averageRating,
		rating_distribution: ratingDistribution,
		num_reviews: totalRating,
	} = details;

	return (
		<>
			<p className={styles.header}>Student feedback</p>
			<main className={styles.mainContainer}>
				<section className={styles.averageRating}>
					<p className={styles.rating}>
						{averageRating.toPrecision(2)}
					</p>
					<div className={styles.stars}>
						<StarsRating
							rating={averageRating}
							fontSize='1.3rem'
						/>
					</div>
					<p className={styles.courseRating}>Course Rating</p>
				</section>
				<section className={styles.ratingDistribution}>
					{ratingDistribution.map((item, idx) => {
						return (
							<RatingProgress
								percentage={(item.count / totalRating) * 100}
								starsCount={item.rating}
								key={idx}
							/>
						);
					})}
				</section>
			</main>
		</>
	);
}

export default StudentFeedback;
