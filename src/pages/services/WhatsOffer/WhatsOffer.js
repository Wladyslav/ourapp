import React from 'react';
import OfferElements from './OfferElements/OfferElements';
import styles from './WhatsOffer.module.scss';
const WhatsOffer = () => {
    return (
        <section className={styles.whatsOffer_section}>
            <div className={styles.offerTitle}>
                <h2>WHAT'S ON OFFER?</h2>
                <p className={styles.description}>
                The possibilities with code are endless and all sorts of projects can be taken on, but here are some of the core services
                </p>
            </div>
            <OfferElements/>
        </section>
    )
}

export default WhatsOffer;