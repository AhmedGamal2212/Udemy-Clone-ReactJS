import React from 'react';
import styles from './LinksList.module.css';

function LinksList({links}) {
    return (
        <ul className={styles.list}>
            {links.map((link, idx) => (
                <li
                    className={styles.item}
                    key={idx}
                >
                    <a
                        className={styles.link}
                        href={link.href}
                    >
                        {link.text}
                    </a>
                </li>
            ))}
        </ul>
    );
}

export default LinksList;
