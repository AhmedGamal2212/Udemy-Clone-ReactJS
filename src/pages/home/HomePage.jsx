import React from 'react';
import CoursesBox from '../../components/courses-box/CoursesBox';
import section from '../../courses';
import NavBar from '../../components/nav-bar/NavBar';

function HomePage () {
    return ( 
        <>
            <NavBar />
            <CoursesBox courses={section.courses} description={section.description} title={section.title}></CoursesBox>
        </>
     );
}

export default HomePage ;