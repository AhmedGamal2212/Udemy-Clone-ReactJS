import React, { useEffect, useState } from 'react';
import SingleCourseHeader from '../single-course-header/SingleCourseHeader';
import CourseObjectives from '../course-objectives/CourseObjectives';
import LoadingSpinner from '../loading-spinner/LoadingSpinner';
import CourseContent from '../course-content/CourseContent';
import BuyCourseNavBar from '../buy-course-nav-bar/BuyCourseNavBar';
import styles from './CourseDetailsPage.module.css'

function CourseDetailsPage({ courseDetails }) {
	const [fetched, setAsFetched] = useState(false);
	const [additionalDetails, setAdditionalDetails] = useState({});

	useEffect(() => {
		fetch('https://api.npoint.io/427e24cf2470da9aecca')
			.then((response) => response.json())
			.then((jsonFile) => {
				setAdditionalDetails(jsonFile);
				setAsFetched(true);
			});
	}, []);

	return fetched ? (
		<main>
			<SingleCourseHeader courseDetails={courseDetails} />
			<CourseObjectives courseDetails={courseDetails} />
			<CourseContent details={additionalDetails} />
			<BuyCourseNavBar details={courseDetails} />
		</main>
	) : (
		<LoadingSpinner />
	);
}

export default CourseDetailsPage;
