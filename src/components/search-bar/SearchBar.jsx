import React, {useState} from 'react';
import styles from './SearchBar.module.css';
import {useNavigate} from 'react-router-dom';

function SearchBar() {
    const [barValue, setBarValue] = useState('');
    const navigate = useNavigate();

    const update = (e) => {
        e.preventDefault();
        setBarValue(e.target.value);
    };

    const searchPressed = (barValue) => {
        navigate({
            pathname: '/Udemy-Clone-ReactJS/',
            search: barValue ? `filter=${barValue}` : '',
        });
    };

    const keySearch = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            searchPressed(barValue);
        }
    };

    return (
        <li className={styles.searchBar}>
            <form
                action=''
                className={styles.form}
            >
                <button
                    onClick={() => searchPressed(barValue)}
                    type='button'
                    className={styles.searchIcon}
                >
                    <i className='fa-solid fa-magnifying-glass'></i>
                </button>
                <input
                    onKeyDown={keySearch}
                    type='text'
                    placeholder='Search for anything'
                    onChange={update}
                />
            </form>
        </li>
    );
}

export default SearchBar;
