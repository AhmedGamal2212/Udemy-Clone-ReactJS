import React from 'react';
import styles from './ThisCourseIncludes.module.css';
import {
    AllInclusive,
    Download,
    EmojiEvents,
    InsertDriveFile,
    OndemandVideo,
    StayCurrentPortrait,
} from '@mui/icons-material';
import {List, ListItem, ListItemIcon, ListItemText} from '@mui/material';

function ThisCourseIncludes({details}) {
    const {
        content_length_video: seconds,
        num_additional_assets: downloadable,
    } = details;

    const icons = [
        <OndemandVideo className={styles.black}/>,
        <InsertDriveFile className={styles.black}/>,
        <Download className={styles.black}/>,
        <AllInclusive className={styles.black}/>,
        <StayCurrentPortrait className={styles.black}/>,
        <EmojiEvents className={styles.black}/>,
    ];
    const itemsText = [
        `${parseInt(seconds / 60 / 60)} hours on-demand video`,
        '1 article',
        `${downloadable} downloadable resources`,
        'Full lifetime access',
        'Access on mobile and TV',
        'Certificate of completion',
    ];

    return (
        <main className={styles.mainContainer}>
            <p className={styles.header}>This course includes:</p>
            <List>
                {icons.map((icon, idx) => {
                    return (
                        <ListItem
                            key={idx}
                            disablePadding
                            className={styles.listItem}
                        >
                            <ListItemIcon>{icon}</ListItemIcon>
                            <ListItemText className={styles.itemText}>
								<span className={styles.black}>
									{itemsText[idx]}
								</span>
                            </ListItemText>
                        </ListItem>
                    );
                })}
            </List>
        </main>
    );
}

export default ThisCourseIncludes;
