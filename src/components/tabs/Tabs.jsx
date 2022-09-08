import React from 'react'
import '../styles.css'
import Tab from '../tab/Tab';

function Tabs() {
    const categories = ['Python',
        'Excel',
        'Web Development',
        'JavaScript',
        'Data Science',
        'AWS Certification', 
        'Drawing'];
    const htmlValues = ['python',
        'excel',
        'web-dev',
        'js', 
        'date-sience',
        'aws',
        'drawing'];
    const tabs = [...categories];
    return ( 
        <>
            <fieldset className="courses-radio">
                {tabs.map((category, idx) => {
                    return <Tab key={idx} category={category} htmlValue={htmlValues[idx]} />
                })}
            </fieldset>
        </>
     );
}

export default Tabs;