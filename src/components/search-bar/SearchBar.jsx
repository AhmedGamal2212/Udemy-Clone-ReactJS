import React, { useContext, useState, useEffect } from 'react';
import '../styles.css';
import { SetSearchTermContext } from '../../App';
import { useNavigate } from 'react-router-dom';

function SearchBar() {
	const [barValue, setBarValue] = useState('');
	const navigate = useNavigate();

	const update = (e) => {
		e.preventDefault();
		setBarValue(e.target.value);
	};

	const searchPressed = (barValue) => {
		navigate({
			pathname: '/ahmedGamal-Project2React/',
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
		<li className='search-bar'>
			<form action=''>
				<button
					onClick={() => searchPressed(barValue)}
					type='button'
					className='search-icon'
				>
					<i className='fa-solid fa-magnifying-glass'></i>
				</button>
				<input
					onKeyDown={keySearch}
					type='text'
					placeholder='Search for anything'
					className='bar'
					onChange={update}
				/>
			</form>
		</li>
	);
}

export default SearchBar;
