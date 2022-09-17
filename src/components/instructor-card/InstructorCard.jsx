import React from 'react';
import styles from './InstructorCard.module.css';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import {
	Star,
	WorkspacePremium,
	People,
	PlayCircle,
} from '@mui/icons-material';
import FadedText from '../faded-text/FadedText'

function InstructorCard({ details }) {
	const {
		display_name: name,
		job_title: title,
		image_100x100: image,
		rating,
		reviews,
		students,
		courses,
        description
	} = details;

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
						<ListItem className={styles.listItem}>
							<ListItemIcon>
								<Star className={styles.black} />
							</ListItemIcon>
							<ListItemText className={styles.profileElement}>
								<span className={styles.black}>
									{rating} Instructor Rating
								</span>
							</ListItemText>
						</ListItem>
						<ListItem className={styles.listItem}>
							<ListItemIcon>
								<WorkspacePremium className={styles.black} />
							</ListItemIcon>
							<ListItemText className={styles.profileElement}>
								<span className={styles.black}>
									{reviews} Reviews
								</span>
							</ListItemText>
						</ListItem>
						<ListItem className={styles.listItem}>
							<ListItemIcon>
								<People className={styles.black} />
							</ListItemIcon>
							<ListItemText className={styles.profileElement}>
								<span className={styles.black}>
									{students} Students
								</span>
							</ListItemText>
						</ListItem>
						<ListItem className={styles.listItem}>
							<ListItemIcon>
								<PlayCircle className={styles.black} />
							</ListItemIcon>
							<ListItemText className={styles.profileElement}>
								<span className={styles.black}>
									{courses} Courses
								</span>
							</ListItemText>
						</ListItem>
					</List>
				</section>
			</section>
            <FadedText rawHTML={description}/>
		</article>
	);
}

export default InstructorCard;
