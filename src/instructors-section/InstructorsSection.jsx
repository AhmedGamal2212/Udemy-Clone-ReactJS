import React from 'react';
import styles from './InstructorsSection.module.css';
import InstructorCard from '../components/instructor-card/InstructorCard';
import { List, ListItem } from '@mui/material';

function InstructorsSection({ details }) {
	const { visible_instructors: instructors } = details;
	return (
		<main className={styles.mainContainer}>
            <p className={styles.sectionTitle}>Instructors</p>
			<List>
				{instructors.map((instructor, idx) => {
					return (
						<ListItem
							key={idx}
							disablePadding
						>
							<InstructorCard details={instructor} />
						</ListItem>
					);
				})}
			</List>
		</main>
	);
}

export default InstructorsSection;
