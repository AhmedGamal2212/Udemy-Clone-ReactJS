import React from 'react';
import styles from './CourseObjectives.module.css';

function CourseObjectives({ courseDetails }) {
	const { objectives_summary: objectives } = courseDetails;

	return (
		<div className={styles.objectivesContainer}>
			<p className={styles.header}>What you'll learn</p>
			<section className={styles.objectives}>
				{objectives.map((objective, idx) => {
					return (
						<p
							key={idx}
							className={styles.objective}
						>
							<i
								style={{ marginRight: '10px', color: 'grey' }}
								className='fa-solid fa-check'
							></i>{' '}
							{objective}
						</p>
					);
				})}
			</section>
		</div>
	);
}

export default CourseObjectives;
