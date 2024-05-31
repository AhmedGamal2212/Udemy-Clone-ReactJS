import React, {useContext, useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {Data, FetchState} from '../../App';
import htmlValues from '../../htmlValues';
import LoadingSpinner from '../../components/loading-spinner/LoadingSpinner';
import CourseDetailsPage from '../../components/course-details-page/CourseDetailsPage';
import styles from './SingleCoursePage.module.css';

function SingleCoursePage() {
    const coursesData = useContext(Data);
    const fetched = useContext(FetchState);
    const {courseId} = useParams();
    const [courseDetails, setCourseDetails] = useState({});
    const [notFound, setNotFound] = useState(true);

    useEffect(() => {
        if (fetched) {
            htmlValues.forEach((value) => {
                const section = coursesData[`${value}_res`];
                section['items'].forEach((course) => {
                    if (course.id.toString() === courseId) {
                        setCourseDetails(course);
                        setNotFound(false);
                    }
                });
            });
        }
    }, [fetched, notFound, courseDetails, coursesData, courseId]);

    return fetched ? (
        notFound ? (
            <main className={styles.main}>
                <h1 className={styles.message}>Course Not Found</h1>
            </main>
        ) : (
            <CourseDetailsPage courseDetails={courseDetails}/>
        )
    ) : (
        <LoadingSpinner/>
    );
}

export default SingleCoursePage;
