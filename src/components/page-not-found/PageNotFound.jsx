import React from 'react';
import styles from './PageNotFound.module.css'

function PageNotFound() {
    return ( 
        <main className={styles.main}>
            <h1 className={styles.message}>404 Page Not Found</h1>
        </main>
     );
}

export default PageNotFound;