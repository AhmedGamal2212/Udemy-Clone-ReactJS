import React from 'react';
import '../styles.css'

function SearchBar() {
    return (         
        <li className="search-bar">
            <form action=''>
                <button className="search-icon" type="button"><i className="fa-solid fa-magnifying-glass"></i></button>
                <input type="text" placeholder="Search for anything" className="bar" />
            </form>
        </li>
     );
}

export default SearchBar;