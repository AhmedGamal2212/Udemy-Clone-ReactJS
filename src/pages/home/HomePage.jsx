import React, { useEffect } from 'react';
import Header from '../../components/header/Header';
import CoursesSection from '../../components/courses-section/CoursesSection';

function HomePage() {
	useEffect(() => {
		const footer = document.querySelector('#page-footer');
		footer.style.marginBottom = '0';
		const pathName = window.location.href;
		if (
			!(
				pathName.includes('#courses') ||
				pathName.includes('courses') ||
				pathName.includes('filter')
			)
		)
			window.scrollTo(0, 0);
		else if (pathName.includes('#courses')) {
			const section = document.querySelector('#courses-section');
			section.scrollIntoView({
				behavior: 'smooth',
				block: 'start',
			});
		}
	});

	return (
		<>
			<Header />
			<CoursesSection />
		</>
	);
}

export default HomePage;
