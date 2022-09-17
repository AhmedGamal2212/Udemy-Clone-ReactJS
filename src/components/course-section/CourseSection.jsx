import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import { useEffect } from 'react';
import { useState } from 'react';
import styles from './CourseSection.module.css';

function CourseSection({ ExpandAll, sectionDetails, idx }) {
	const [open, toggleOpen] = useState(false);
	const {
		title,
		items,
		lecture_count: sectionLectures,
		content_length: sectionLength,
	} = sectionDetails;

	useEffect(() => {
		toggleOpen(ExpandAll);
	}, [ExpandAll]);

	useEffect(() => {
		toggleOpen(idx === 0 ? true : false);
	}, []);

	const handleClick = () => {
		toggleOpen(!open);
	};

	return (
		<Accordion
			expanded={open}
			onClick={handleClick}
			className={styles.accordion}
		>
			<AccordionSummary
				className={styles.accordionSummary}
				expandIcon={<ExpandMore className={styles.expandIcon} />}
			>
				<span className={styles.summaryText}>{title}</span>
				<span className={styles.hide}>
					{sectionLectures}lectures . {Math.round(sectionLength / 60)}
					min
				</span>
			</AccordionSummary>
			<AccordionDetails className={styles.accordionDetails}>
				{items.map((item, idx) => {
					return (
						<div
							key={idx}
							className={styles.lecture}
						>
							<span
								className={
									(item.content_summary.includes('page')
										? 'fa-regular fa-file'
										: 'fa-solid fa-circle-play') +
									` ${styles.lectureIcon}`
								}
							></span>
							<span
								className={
									item.can_be_previewed
										? styles.previewedLecture
										: styles.lectureTitle
								}
							>
								{item.title}
							</span>
							{item.can_be_previewed ? (
								<span className={styles.preview}>Preview</span>
							) : (
								<span></span>
							)}
							<span className={styles.hide}>
								{item.content_summary}
							</span>
						</div>
					);
				})}
			</AccordionDetails>
		</Accordion>
	);
}

export default CourseSection;
