import React from 'react'
import styles from './OfferElements.module.scss';


const offer_items = [
    {},
    {},
    {},
    {},
]



const OfferElements = () => {
    return (
        <div className={styles.offerElements_container}>
            <div className={styles.offer_item}></div>
            <div className={styles.offer_item}></div>
            <div className={styles.offer_item}></div>
            <div className={styles.offer_item}></div>
            <div className={styles.offer_item}></div>
            <div className={styles.offer_item}></div>

        </div>
    )
}

export default OfferElements;