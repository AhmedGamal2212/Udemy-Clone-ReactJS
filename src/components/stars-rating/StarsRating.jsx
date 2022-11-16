import React from 'react';
import styles from './StarsRating.module.css';

function StarsRating({ rating, fontSize: size }) {
	return (
		<>
			<div
				className={styles.starsOuter}
				style={{ fontSize: size ? `${size}` : 'small' }}
			>
				<div
					className={styles.starsInner}
					style={{ width: `${(rating / 5) * 100}%` }}
				></div>
			</div>
		</>
	);
}

export default StarsRating;
