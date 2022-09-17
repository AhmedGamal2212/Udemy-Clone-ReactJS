import React, { useState } from 'react';
import styles from './CourseContent.module.css';
import CourseSection from '../course-section/CourseSection';
import { List, ListItem } from '@mui/material';

function CourseContent({ details }) {
	const [open, toggleOpen] = useState(false);
	const { curriculum_context: content } = details;
	const {
		sections,
		num_of_published_lectures: numOfLectures,
		estimated_content_length_in_seconds: timeInSeconds,
	} = content['data'];

	const timeInHours = parseInt(timeInSeconds / 60 / 60);
	const remainingMinutes = Math.round(
		(timeInSeconds - timeInHours * 60 * 60) / 60
	);

	const handleClick = () => {
		toggleOpen(!open);
	};

	return (
		<div className={styles.contentContainer}>
			<p className={styles.header}>Course content</p>
			<section className={styles.beforeContent}>
				<p>
					{sections.length} sections . {numOfLectures} lectures .{' '}
					{timeInHours}h {remainingMinutes}m total length
				</p>
				<button
					type='button'
					onClick={handleClick}
					className={styles.expandAllButton}
				>
					{open ? 'Collapse' : 'Expand'} all sections
				</button>
			</section>
			<List>
				{sections.map((section, idx) => {
					const sectionComponent = (
						<CourseSection
							ExpandAll={open}
							sectionDetails={section}
							idx={idx}
						/>
					);
					return (
						<ListItem
							key={idx}
							disablePadding
							className={styles.listItem}
						>
							{sectionComponent}
						</ListItem>
					);
				})}
			</List>
		</div>
	);
}

export default CourseContent;
