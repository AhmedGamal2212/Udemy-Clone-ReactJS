import React from 'react'
import CoursesBox from '../../components/courses-box/CoursesBox';
import section from '../../courses';
import '../styles.css'
import Tabs from '../tabs/Tabs';

function CoursesSection() {
    return ( 
        <div className="courses-section">
            <h2 className="courses-section-title">A broad selection of courses</h2>
            <p>Choose from 185,000 online video courses with new additions published every month</p>
            <Tabs />
            <CoursesBox courses={section.courses} description={section.description} title={section.title}></CoursesBox>
        </div>
     );
}

export default CoursesSection;