import React from 'react';
import styles from './CourseDescription.module.css';
import FadedText from '../faded-text/FadedText';

function CourseDescription({ details }) {
	return (
		<div className={styles.mainContainer}>
			<p className={styles.header}>Description</p>
			<FadedText rawHTML={details['description']} />
		</div>
	);
}

export default CourseDescription;
