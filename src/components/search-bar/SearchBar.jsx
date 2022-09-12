import React, {useContext, useState} from 'react';
import '../styles.css'
import { SetSearchTermContext } from '../../App';

function SearchBar() {
    const setSearchTerm = useContext(SetSearchTermContext);

    const [barValue, setBarValue] = useState('');

    const update = e => {
        e.preventDefault();
        setBarValue(e.target.value);
    }

    const searchPressed = (barValue) => {
        setSearchTerm(barValue);
        const coursesSection = document.querySelector('.courses-section');
        coursesSection.scrollIntoView({behavior:"smooth", block:'start'});
    }

    const keySearch = e => {
        if(e.key === 'Enter'){
            e.preventDefault();
            searchPressed(barValue);
        }
    }

    return (         
        <li className="search-bar">
            <form action=''>
                <button onClick={() => searchPressed(barValue)} type="button" className="search-icon"><i className="fa-solid fa-magnifying-glass"></i></button>
                <input onKeyDown={keySearch} type="text" placeholder="Search for anything" className="bar" onChange={update} />
            </form>
        </li>
     );
}

export default SearchBar;