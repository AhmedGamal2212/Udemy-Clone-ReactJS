import React from 'react';
import { List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import styles from './CourseRequirements.module.css';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function CourseRequirements({ details }) {
	const { prerequisites: requirements } = details;
	return (
		<main className={styles.mainContainer}>
			<p className={styles.header}>Requirements</p>
			<List>
				{requirements.map((requirement, idx) => {
					return (
						<ListItem
							key={idx}
							className={styles.requirement}
						>
							<ListItemIcon>
								<FiberManualRecordIcon
									style={{
										fontSize: 'small',
										color: '#1c1d1f',
									}}
								></FiberManualRecordIcon>
							</ListItemIcon>
							<ListItemText style={{ marginLeft: '-2rem' }}>
								{requirement}
							</ListItemText>
						</ListItem>
					);
				})}
			</List>
		</main>
	);
}

export default CourseRequirements;
