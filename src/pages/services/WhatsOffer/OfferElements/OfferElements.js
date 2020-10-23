import React from 'react'
import styles from './OfferElements.module.scss';


const offer_items = [
    {
        font: "fas fa-cogs",
        title: "IOS / ANDROID DEVELOPMENT",
        description: "Having a website is not enough anymore - now it is expected to also have native applications on iOS and Android."
    },
    {
        font: "fas fa-terminal",
        title: "WEB DEVELOPEMENT",
        description: "Using the latest in web technologies, all websites are custom built and scalable which allows it to grow and increase in functionality."
    },
    {
        font: "fas fa-eye",
        title: "SEO",
        description: "Ensuring your website is easily found, this is started during the development process, and continued after the website is launched."
    },
    {
        font: "fas fa-mobile",
        title: "RESPONSIVE DESIGN",
        description: "In this new era of smartphones and tablets, it has never been more important to have your website or application function perfectly on all screen sizes."
    },
    {
        font: "fas fa-object-ungroup",
        title: "UX DESIGN",
        description: "Enabling websites to become useful, easy to use, and delightful to interact with. The user experience will make or break your product."
    },
    {
        font: "fas fa-database",
        title: "DATABASE ARCHITECTURE",
        description: "Having a database attached will allow websites and applications to become data-driven. Displaying and manipulating information in unlimited ways."
    },
]



const OfferElements = () => {
    return (
        <div className={styles.offerElements_container}>
        
    {offer_items.map((item) => (
        <div className={styles.offer_item} key={item.title}>
            <div style={{width: "155px", height: "70px", padding: "10px", display: "flex", justifyContent: "center"}}>
            <i className={item.font} style={{color: "#7A7A7A", fontSize: "32px"}}></i>
            </div>
            <div className={styles.description}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
            </div>
        </div>
    )) }

        </div>
    )
}

export default OfferElements;