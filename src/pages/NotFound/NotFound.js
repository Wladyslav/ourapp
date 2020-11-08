import React from 'react';
import Button from '../../smallComponents/Button/Button'
import styles from './NotFound.module.scss';
const NotFound = () => {
    return (
        <section className={styles.error_container}>
            <h3>Nie znaleziono scieżki <span role="img" aria-label="😢" aria-labelledby="😢">😢</span></h3>
            <div><Button secondary router path="/" border="1px solid gray"><i class="fas fa-arrow-left"></i> Powrot do strony glownej</Button></div>
        </section>
    )
}

export default NotFound;