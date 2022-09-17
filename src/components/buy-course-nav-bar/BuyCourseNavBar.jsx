import React, { useEffect } from 'react';
import styles from './BuyCourseNavBar.module.css';
import StarsRating from '../stars-rating/StarsRating';

function BuyCourseNavBar({ details }) {
	useEffect(() => {
		const footer = document.querySelector('#page-footer');
		footer.style.marginBottom = '4rem';
	}, []);

	const { title, rating, num_subscribers: subscribers } = details;

	return (
		<nav className={styles.bar}>
			<div className={styles.barContent}>
				<div className={styles.barLeftContent}>
					<p className={styles.courseTitle}>{title}</p>
					<span>
						<StarsRating rating={rating} />{' '}
						<span className={styles.ratingDetails}>
							<span className={styles.numOfRatings}>
								(3,322 ratings)
							</span>{' '}
							{subscribers} students
						</span>
					</span>
				</div>
				<div className={styles.barRightContent}>
					<div className={styles.price}>
						<span className={styles.newPrice}>E£199.99</span>
						<span className={styles.oldPrice}>E£679.99</span>
					</div>
					<button
						type='button'
						className={styles.buyNowButton}
					>
						Buy now
					</button>
				</div>
			</div>
		</nav>
	);
}

export default BuyCourseNavBar;
