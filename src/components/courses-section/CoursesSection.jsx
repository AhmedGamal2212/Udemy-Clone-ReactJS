import React, {useState, useEffect} from 'react'
import CoursesBox from '../../components/courses-box/CoursesBox';
import '../styles.css'
import Tabs from '../tabs/Tabs';
import LoadingSpinner from '../loading-spinner/LoadingSpinner';

function CoursesSection() {

    const [coursesData, setCoursesData] = useState({});
    const [fetched, setAsFetched] = useState(false);
    const [currentTab, setCurrentTab] = useState('python_res');

    useEffect(() => {
        const getData = () => {
            fetch('https://api.npoint.io/97d7e0d71e507947a59f')
            .then(response => response.json())
            .then(jsonFile => {
                setCoursesData(jsonFile['data']);
                setAsFetched(true);
            });
        }
        getData();
    }, []);

    const box = <CoursesBox sectionData={coursesData[currentTab]}></CoursesBox>;
    return ( 
        <div className="courses-section">
            <h2 className="courses-section-title">A broad selection of courses</h2>
            <p>Choose from 185,000 online video courses with new additions published every month</p>
            <Tabs setCurrentTab={setCurrentTab}/>
            {(box && fetched) || <LoadingSpinner />}
        </div>
     );
}

export default CoursesSection;