import React from 'react';
import styles from './BuyCourseNavBar.module.css';

function BuyCourseNavBar() {
	return (
		<nav className={styles.bar}>
			<div className={styles.barContent}>
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
		</nav>
	);
}

export default BuyCourseNavBar;
