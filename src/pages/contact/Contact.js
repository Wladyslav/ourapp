import React from "react";
import styles from "./Contact.module.scss";
import FormSection from "./Form/FormSection";

const Contact = () => (
  <div className={styles.contact_container}>
    <section className={styles.title_section}>
      <h1 className={styles.page_title}>contact</h1>
    </section>

    <FormSection />

    <section className={styles.map_container}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d160255.70092302552!2d16.851780948335083!3d51.12699422822986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470fe9c2d4b58abf%3A0xb70956aec205e0f5!2zV3JvY8WCYXc!5e0!3m2!1spl!2spl!4v1601935740117!5m2!1spl!2spl"
        width="100%"
        height="550"
        frameborder="0"
        allowfullscreen=""
        aria-hidden="false"
        tabindex="0"
      ></iframe>
    </section>
  </div>
);

export default Contact;
