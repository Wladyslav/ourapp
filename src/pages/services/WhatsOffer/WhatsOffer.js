import React from 'react';
import OfferElements from './OfferElements/OfferElements';
import styles from './WhatsOffer.module.scss';
const WhatsOffer = () => {
    return (
        <section className={styles.whatsOffer_section}>
            <div className={styles.offerTitle}>
                <h2>NASZA OFERTA</h2>
                <p className={styles.description}>
                Możliwości związane z kodem są nieograniczone i można realizować wszelkiego rodzaju projekty, ale oto niektóre z naszych podstawowych usług
                </p>
            </div>
            <OfferElements/>
        </section>
    )
}

export default WhatsOffer;