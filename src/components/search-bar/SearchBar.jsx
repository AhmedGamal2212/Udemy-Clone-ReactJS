import React, {useContext, useState} from 'react';
import '../styles.css'
import { SetSearchTermContext } from '../../App';

function SearchBar() {
    const setSearchTerm = useContext(SetSearchTermContext);

    const [barValue, setBarValue] = useState('');

    const update = (e) => {
        setBarValue(e.target.value);
        e.preventDefault();
    }

    const searchPressed = (barValue) => {
        setSearchTerm(barValue);
        const coursesSection = document.querySelector('.courses-section');
        console.log(coursesSection);
        coursesSection.scrollIntoView({behavior:"smooth", block:'start', inline:'nearest'});
    }

    return (         
        <li className="search-bar">
            <form action=''>
                <button className="search-icon" type="button"><i className="fa-solid fa-magnifying-glass" onClick={() => searchPressed(barValue)}></i></button>
                <input type="text" placeholder="Search for anything" className="bar" onChange={update} />
            </form>
        </li>
     );
}

export default SearchBar;