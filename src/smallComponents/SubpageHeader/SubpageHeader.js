import React from 'react'
import styles from './SubpageHeader.module.scss';
const SubpageHeader = ({children}) => {
    return (
        <article className={styles.title_section}>
        <h1 className={styles.page_title}>{children}</h1>
      </article>
    )
}

export default SubpageHeader;