import React from 'react'
import styles from './Loader.module.scss'
const Loader = () => {
    return (
    <>
    <div className={styles.blurScreen}></div>
    <div className={styles.lds_facebook}><div></div><div></div><div></div></div>
    </>
    )
}

export default Loader