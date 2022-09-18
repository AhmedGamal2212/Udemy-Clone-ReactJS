import {
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	IconButton,
	TextField,
} from '@mui/material';
import { Search } from '@mui/icons-material';
import React from 'react';
import { useState } from 'react';
import styles from './SearchReviewSection.module.css';

function SearchReviewSection({ setSearchTerm, setStars }) {
	const selectOptions = [
		'All ratings',
		'One star',
		'Two stars',
		'Three stars',
		'Four stars',
		'Five stars',
	];
	const [numOfStars, setNumOfStars] = useState(0);

	const handleChange = (e) => {
		setStars(e.target.value);
		setNumOfStars(e.target.value);
	};

	return (
		<main className={styles.mainContainer}>
			<div className={styles.searchBar}>
				<form>
					<TextField
						id='reviews-search-bar'
						style={{
							flexGrow: 1,
							border: '1px solid black',
							outline: 'none',
						}}
						type='search'
						variant='filled'
						color='white'
						placeholder='Search reviews'
						onInput={(e) => setSearchTerm(e.target.value)}
					/>
					<IconButton
						type='button'
						aria-label='search'
						style={{
							padding: '0',
                            height: '100%',
							width: '2.8rem',
						}}
					>
						<Search
							style={{
								fill: 'white',
								backgroundColor: 'black',
								height: '100%',
								width: '100%',
								fontSize: 'small',
							}}
						/>
					</IconButton>
				</form>
			</div>
			<div className={styles.select}>
				<FormControl fullWidth>
					<InputLabel id='reviews-stars-filter-label'>
						Filter with stars
					</InputLabel>
					<Select
						labelId='filter-reviews-by-stars'
						id='reviews-stars-filter'
						value={numOfStars}
						onChange={handleChange}
					>
						{selectOptions.map((option, idx) => {
							return (
								<MenuItem
									value={idx}
									key={idx}
								>
									{option}
								</MenuItem>
							);
						})}
					</Select>
				</FormControl>
			</div>
		</main>
	);
}

export default SearchReviewSection;
