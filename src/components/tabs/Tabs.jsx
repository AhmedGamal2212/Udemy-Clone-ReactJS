import React, {useState} from 'react'
import '../styles.css'
import Tab from '../tab/Tab';

function Tabs({setCurrentTab}) {
    const categories = ['Python',
        'Excel',
        'Web Development',
        'JavaScript',
        'Data Science',
        'AWS Certification', 
        'Drawing'];
    const htmlValues = ['python',
        'excel',
        'web',
        'js', 
        'data',
        'aws',
        'draw'];
    const tabs = [...categories];
    const [selectedIndex, setSelectedIndex] = useState(0);
    return ( 
        <>
            <fieldset className="courses-radio">
                {tabs.map((category, idx) => {
                    return <Tab 
                        key={idx} 
                        idx={idx} 
                        category={category} 
                        htmlValue={htmlValues[idx]} 
                        setSelectedIndex={setSelectedIndex} 
                        setCurrentTab={setCurrentTab} 
                        checked={idx === selectedIndex} />
                })}
            </fieldset>
        </>
     );
}

export default Tabs;