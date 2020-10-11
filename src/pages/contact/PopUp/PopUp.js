import React from 'react'
import styles from './PopUp.module.scss'
const PopUp = ({message, show}) => {
    return (
        <div className={show ? `${styles.popUp} ${styles.open}` : styles.popUp}>
            {message === "OK" ? <p>Wysłano wiadomośc!</p> : <p>{`Błąd w wysyłaniu wiadomości: ${message}`}</p>} 
        </div>
    )
}

export default PopUp;