import React from 'react';
import styles from './Tab.module.css'

function Tab({
	category,
	htmlValue,
	checked,
	setCurrentTab,
	setSelectedIndex,
	idx,
}) {
	const changeSetion = (tab) => {
		setSelectedIndex(idx);
		setCurrentTab(tab);
	};
	return (
		<label className={styles.label}>
			<input
				type='radio'
				value={htmlValue}
				name='course-choice'
				checked={checked}
				onChange={() => changeSetion(`${htmlValue}_res`)}
				className={styles.input}
			/>
			<span className={styles.span}>{category}</span>
		</label>
	);
}

export default Tab;
