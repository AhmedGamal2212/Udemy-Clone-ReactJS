import React from 'react';
import NavBar from '../../components/nav-bar/NavBar';
import Header from '../../components/header/Header';
import CoursesSection from '../../components/courses-section/CoursesSection';

function HomePage () {
    return ( 
        <>
            <NavBar />
            <Header />
            <CoursesSection />            
        </>
     );
}

export default HomePage ;