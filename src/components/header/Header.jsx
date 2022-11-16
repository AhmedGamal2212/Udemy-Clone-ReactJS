import React from 'react';
import './Header.css'

function Header() {
	return (
		<>
			<section className='new-to-udemy'>
				<article>
					<p>New to Udemy? Lucky you.</p>
					<p>
						Courses start at E£169.99.Get your new-student offer
						befort it expires.
					</p>
				</article>
				<figure>
					<img
						src='https://i.ibb.co/2qHbQqM/download.png'
						alt='clock'
					/>
				</figure>
			</section>
		</>
	);
}

export default Header;
