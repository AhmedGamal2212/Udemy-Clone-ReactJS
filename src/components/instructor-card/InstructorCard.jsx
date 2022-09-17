import React from 'react';
import styles from './InstructorCard.module.css';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import {
	Star,
	WorkspacePremium,
	People,
	PlayCircle,
} from '@mui/icons-material';
import FadedText from '../faded-text/FadedText';

function InstructorCard({ details }) {
	const {
		display_name: name,
		job_title: title,
		image_100x100: image,
		rating,
		reviews,
		students,
		courses,
		description,
	} = details;

	const icons = [
		<Star className={styles.black} />,
		<WorkspacePremium className={styles.black} />,
		<People className={styles.black} />,
		<PlayCircle className={styles.black} />,
	];
	const itemsText = [
		<span className={styles.black}>{rating} Instructor Rating</span>,
		<span className={styles.black}>{reviews} Reviews</span>,
		<span className={styles.black}>{students} Students</span>,
		<span className={styles.black}>{courses} Courses</span>,
	];
	return (
		<article>
			<p className={styles.instructorName}>{name}</p>
			<p className={styles.instructorTitle}>{title}</p>
			<section className={styles.instructorProfile}>
				<figure className={styles.instructorImage}>
					<img
						className='d-block w-100 h-90'
						src={image}
						alt=''
					/>
				</figure>
				<section className={styles.profileElements}>
					<List>
						{icons.map((icon, idx) => {
							return (
								<ListItem
									key={idx}
									className={styles.listItem}
								>
									<ListItemIcon>{icon}</ListItemIcon>
									<ListItemText
										className={styles.profileElement}
									>
										{itemsText[idx]}
									</ListItemText>
								</ListItem>
							);
						})}
					</List>
				</section>
			</section>
			<FadedText rawHTML={description} />
		</article>
	);
}

export default InstructorCard;
