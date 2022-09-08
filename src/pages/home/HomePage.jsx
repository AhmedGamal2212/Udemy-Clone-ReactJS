import React from 'react';
import CoursesBox from '../../components/courses-box/CoursesBox';
import section from '../../courses';
import NavBar from '../../components/nav-bar/NavBar';
import Header from '../../components/header/Header';

function HomePage () {
    return ( 
        <>
            <NavBar />
            <Header />
            <CoursesBox courses={section.courses} description={section.description} title={section.title}></CoursesBox>
        </>
     );
}

export default HomePage ;