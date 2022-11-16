import React from 'react'
import RingLoader from 'react-spinners/RingLoader'
import styles from './LoadingSpinner.module.css'

function LoadingSpinner() {
    return ( 
        <RingLoader className={styles.spinner} color={"grey"} />
     );
}

export default LoadingSpinner;