import React, {useEffect, useState} from 'react';
import SingleCourseHeader from '../single-course-header/SingleCourseHeader';
import CourseObjectives from '../course-objectives/CourseObjectives';
import LoadingSpinner from '../loading-spinner/LoadingSpinner';
import CourseContent from '../course-content/CourseContent';
import BuyCourseNavBar from '../buy-course-nav-bar/BuyCourseNavBar';
import CourseRequirements from '../course-requirements/CourseRequirements';
import styles from './CourseDetailsPage.module.css';
import CourseDescription from '../course-description/CourseDescription';
import InstructorsSection from '../../instructors-section/InstructorsSection';
import ThisCourseIncludes from '../this-course-includes/ThisCourseIncludes';
import StudentFeedback from '../student-feedback/StudentFeedback';
import ReviewsSection from '../reviews-section/ReviewsSection';
import Sticky from 'react-stickynode';
import StickyCardContent from '../sticky-card-content/StickyCardContent';

function CourseDetailsPage({courseDetails}) {
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
            <section>
                <Sticky
                    top={0}
                    bottomBoundary='#boundary'
                    innerZ={300}
                    enabled={true}
                >
                    <StickyCardContent details={courseDetails} additionalDetails={additionalDetails}/>
                </Sticky>
                <SingleCourseHeader courseDetails={courseDetails} additionalDetails={additionalDetails}/>
                <div className={styles.body}>
                    <CourseObjectives courseDetails={courseDetails}/>
                    <div className={styles.includesSection}>
                        <ThisCourseIncludes details={additionalDetails}/>
                    </div>
                    <CourseContent details={additionalDetails}/>
                    <CourseRequirements details={additionalDetails}/>
                    <CourseDescription details={additionalDetails}/>
                    <InstructorsSection details={additionalDetails}/>
                    <StudentFeedback details={additionalDetails}/>
                    <div id='boundary'>
                        <ReviewsSection details={additionalDetails}/>
                    </div>
                </div>
                <BuyCourseNavBar details={courseDetails}/>
            </section>
        </main>
    ) : (
        <LoadingSpinner/>
    );
}

export default CourseDetailsPage;
