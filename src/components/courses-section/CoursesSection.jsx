import React, { useState, useContext } from 'react';
import CoursesBox from '../../components/courses-box/CoursesBox';
import Tabs from '../tabs/Tabs';
import LoadingSpinner from '../loading-spinner/LoadingSpinner';
import { FetchState, Data } from '../../App';
import styles from './CoursesSection.module.css'

function CoursesSection() {
	const [currentTab, setCurrentTab] = useState('python_res');
	const fetched = useContext(FetchState);
	const coursesData = useContext(Data);

	return (
		<div className={styles.coursesSection}>
			<h2 className={styles.coursesSectionTitle}>
				A broad selection of courses
			</h2>
			<p>
				Choose from 185,000 online video courses with new additions
				published every month
			</p>
			<Tabs setCurrentTab={setCurrentTab} />
			{fetched ? (
				<CoursesBox sectionData={coursesData[currentTab]} />
			) : (
				<LoadingSpinner />
			)}
		</div>
	);
}

export default CoursesSection;
