import React from 'react';
import '../styles.css';
import SearchBar from '../search-bar/SearchBar';
import { Link } from 'react-router-dom';

function NavBar() {
	return (
		<>
			<nav>
				<ul>
					<li className='menu-btn'>
						<button
							type='button'
							name='menu-icon'
						>
							<i className='fa-solid fa-bars'></i>
						</button>
					</li>
					<li className='logo'>
						<Link to='/ahmedGamal-Project2React/'>
							<img
								src='https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg'
								alt='udemy-logo'
							/>
						</Link>
					</li>
					<li className='categories-btn'>
						<button
							type='button'
							name='categories-button'
						>
							Categories
						</button>
					</li>
					{/* Add SearchBar here */}
					<SearchBar />
					<li className='search-btn'>
						<button
							type='button'
							name='search-button'
						>
							<i className='fa-solid fa-magnifying-glass'></i>
						</button>
					</li>
					<li className='udemy-business-btn'>
						<button
							type='button'
							name='udemy-business'
						>
							<span>Udemy Business</span>
						</button>
					</li>
					<li className='teach-on-udemy-btn'>
						<button
							type='button'
							name='teach-on-udemy-button'
						>
							Teach on Udemy
						</button>
					</li>
					<li className='cart-btn'>
						<button
							type='button'
							name='cart-button'
						>
							<i className='fa-solid fa-cart-shopping'></i>
						</button>
					</li>
					<li className='login-btn'>
						<button
							type='button'
							name='login-button'
						>
							Log in
						</button>
					</li>
					<li className='signup-btn'>
						<button
							type='button'
							name='singup-button'
						>
							Sign up
						</button>
					</li>
					<li className='lang-btn'>
						<button
							type='button'
							name='language-button'
						>
							<i className='fa-solid fa-globe'></i>
						</button>
					</li>
				</ul>
			</nav>
		</>
	);
}

export default NavBar;
