import React from 'react';
import NavBar from '../../components/nav-bar/NavBar';
import Header from '../../components/header/Header';
import CoursesSection from '../../components/courses-section/CoursesSection';
import Footer from '../../components/footer/Footer';

function HomePage () {
    return ( 
        <>
            <NavBar />
            <Header />
            <CoursesSection />
            <Footer />
        </>
     );
}

export default HomePage ;