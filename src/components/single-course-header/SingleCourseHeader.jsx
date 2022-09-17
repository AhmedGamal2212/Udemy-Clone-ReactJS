import React from 'react';
import styles from './SingleCourseHeader.module.css';
import './iconStyle.css';
import { Link } from 'react-router-dom';
import StarsRating from '../stars-rating/StarsRating';

function SingleCourseHeader({ courseDetails }) {
	const {
		title,
		image_750x422: image,
		headline,
		rating,
		num_subscribers: subscribers,
		visible_instructors: instructors,
		last_update_date: lastUpdate,
		caption_languages: languages,
	} = courseDetails;

	const [year, month] = lastUpdate.split('-');
	const date = new Date(year, month - 1);

	return (
		<>
			<main className={styles.mainContainer}>
				<div className={styles.body}>
					<section className={styles.categoriesSection}>
						<Link to='/ahmedGamal-Project2React/'>
							<p className={styles.subCategory}>Home</p>
						</Link>
						<i className='fa-solid fa-chevron-right sub-category-arrow'></i>
						<Link to='/ahmedGamal-Project2React#courses'>
							<p className={styles.subCategory}>courses</p>
						</Link>
					</section>
					<section className={styles.coursePreview}>
						<figure className={styles.imageWrapper}>
							<img
								src={image}
								alt={courseDetails.category}
							/>
						</figure>
						<section className={styles.mainDetails}>
							<h1 style={{ fontWeight: 700 }}>{title}</h1>
							<p>{headline}</p>
							<StarsRating rating={rating} />
							<p className={styles.linkLikeText}>
								(2,305 ratings)
							</p>
							<p
								style={{
									display: 'inline-block',
									marginLeft: '7px',
								}}
							>
								{subscribers} students
							</p>
							<p>
								Created by{' '}
								<span className={styles.linkLikeText}>
									{instructors
										.map((instructor) => instructor.name)
										.join(', ')}
								</span>
							</p>
							<p>
								<i className='fa-solid fa-circle-exclamation'></i>
								<span className={styles.lastUpdate}>
									Last updated
									<span className={styles.lastUpdateDate}>
										{date.getMonth() + 1}/
										{date.getFullYear()}
									</span>
								</span>
							</p>
							<p>
								<i className='fa-solid fa-globe'></i> English
							</p>
							<p>
								<i className='fa-solid fa-closed-captioning'></i>
								<span className={styles.languages}>
									{languages.join(', ')}
								</span>
							</p>
							<section className={styles.priceAndOffer}>
								<p className={styles.headerPrice}>
									<span className={styles.bigPrice}>
										E£199.99
									</span>
									<span className={styles.smallPrice}>
										E£679.99
									</span>
									<span className={styles.offerSize}>
										71% off
									</span>
								</p>
								<p className={styles.timeRemaining}>
									<i className='fa-regular fa-clock'></i>
									<span className={styles.offerText}>
										<span className={styles.bold}>
											5 hours
										</span>{' '}
										left at this price!
									</span>
								</p>
							</section>
							<footer className={styles.previewFooter}>
								<button
									type='button'
									className={styles.addToCartButton}
								>
									Add to cart
								</button>
								<p className='text-center p-3 pb-0'>
									30-Day Money-Back Guarantee
								</p>
								<p className='text-center'>
									Full Lifetime Access
								</p>
								<div className={styles.previewFooterButtons}>
									<button className={styles.footerButton}>
										Share
									</button>
									<button className={styles.footerButton}>
										Gift this course
									</button>
									<button className={styles.footerButton}>
										Apply Coupon
									</button>
								</div>
							</footer>
						</section>
					</section>
				</div>
			</main>
		</>
	);
}

export default SingleCourseHeader;
