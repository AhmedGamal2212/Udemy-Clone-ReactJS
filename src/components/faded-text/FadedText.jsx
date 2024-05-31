import React, {useState} from 'react';
import styles from './FadedText.module.css';
import HTMLReactParser from 'html-react-parser';
import {ExpandLess, ExpandMore} from '@mui/icons-material';

function FadedText({rawHTML}) {
    const [expanded, toggleExpand] = useState(false);

    const text = rawHTML
        .replace(/<ul>/g, `<div class="${styles.pointsCollection}">`)
        .replace(/<\/ul>/g, '</div>')
        .replace(
            /<li><p>/g,
            `<p class=${styles.point}><i class="fa-solid fa-circle ${styles.dotIcon}"></i>`
        )
        .replace(/<\/p><\/li>/g, '</p>');

    const handleExpand = () => {
        toggleExpand(!expanded);
    }

    return (
        <>
            <div className={styles.wrapper}>
                <div className={expanded ? styles.descriptionContent : styles.descriptionContentFaded}>
                    {HTMLReactParser(text)}
                </div>
            </div>
            <button
                type='button'
                className={styles.showMoreButton}
                onClick={handleExpand}
            >
                Show {expanded ? 'less ' : 'more '}{' '}
                {expanded ? <ExpandLess/> : <ExpandMore/>}
            </button>
        </>
    );
}

export default FadedText;
