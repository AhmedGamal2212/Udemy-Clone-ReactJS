import React, { useState, useContext } from 'react';
import CoursesBox from '../../components/courses-box/CoursesBox';
import '../styles.css';
import Tabs from '../tabs/Tabs';
import LoadingSpinner from '../loading-spinner/LoadingSpinner';
import { FetchState, Data } from '../../App';

function CoursesSection() {
	const [currentTab, setCurrentTab] = useState('python_res');
	const fetched = useContext(FetchState);
	const coursesData = useContext(Data);

	return (
		<div className='courses-section'>
			<h2 className='courses-section-title'>
				A broad selection of courses
			</h2>
			<p>
				Choose from 185,000 online video courses with new additions
				published every month
			</p>
			<Tabs setCurrentTab={setCurrentTab} />
			{fetched ? (
				<CoursesBox
					id='courses'
					sectionData={coursesData[currentTab]}
				/>
			) : (
				<LoadingSpinner />
			)}
		</div>
	);
}

export default CoursesSection;
