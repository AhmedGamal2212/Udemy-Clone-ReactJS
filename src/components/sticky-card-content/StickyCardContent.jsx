import React, { useState } from 'react';
import styles from './StickyCardContent.module.css';
import ThisCourseIncludes from '../this-course-includes/ThisCourseIncludes';
import { useEffect } from 'react';
function StickyCardContent({ details, additionalDetails }) {
	const { image_750x422: image } = details;

	const [hidden, toggleHidden] = useState(false);

	const handleStyles = () => {
		if (window.scrollY > 400) {
			toggleHidden(true);
		} else {
			toggleHidden(false);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', handleStyles);
	}, []);

	return (
		<main
			className={styles.mainContainer}
			style={{ position: 'absolute', marginTop: hidden ? '1rem' : '0', boxShadow: hidden ? '0 10px 10px #c2c9d6' : 'none' }}
		>
			<figure className={hidden ? styles.hide : styles.imageWrapper}>
				<img
					className='d-block w-100'
					src={image}
					alt=''
				/>
			</figure>
			<div className={styles.cardBody}>
				<p className={styles.price}>E£679.99</p>
				<button
					className={[styles.addToCartButton, styles.button].join(
						' '
					)}
				>
					Add to cart
				</button>
				<button
					className={[styles.buyNowButton, styles.button].join(' ')}
				>
					Buy now
				</button>
				<p className='text-center'>30 Day Money Back Guarantee</p>
				<ThisCourseIncludes details={additionalDetails} />
				<section className={styles.buttonsWrapper}>
					<button className={styles.footerButton}>Share</button>
					<button className={styles.footerButton}>
						Gift this course
					</button>
					<button className={styles.footerButton}>
						Apply coupon
					</button>
				</section>
				<section className={styles.training}>
					<p className={styles.trainingSectionTitle}>
						Training 5 or more people?
					</p>
					<p className={styles.trainingSectionText}>
						Get your team access to 17,000+ top Udemy courses
						anytime, anywhere.
					</p>
					<button className={styles.tryUdemyBusinessButton}>
						Try Udemy Business
					</button>
				</section>
			</div>
		</main>
	);
}

export default StickyCardContent;
