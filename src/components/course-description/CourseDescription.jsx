import React from 'react';
import styles from './CourseDescription.module.css';
import HTMLReactParser from 'html-react-parser';

function CourseDescription({ details }) {
	let text = details['description'];
	text = text
		.replace(/<ul>/g, `<div class="${styles.pointsCollection}">`)
		.replace(/<\/ul>/g, '</div>')
		.replace(
			/<li><p>/g,
			`<p class=${styles.point}><i class="fa-solid fa-circle ${styles.dotIcon}"></i>`
		)
		.replace(/<\/p><\/li>/g, '</p>');
	return (
		<div className={styles.mainContainer}>
            <p className={styles.header}>
                Description
            </p>
			<div className={styles.descriptionContent}>
				{HTMLReactParser(text)}
			</div>
		</div>
	);
}

export default CourseDescription;
