import React from "react";
import styles from "./FormSection.module.scss";
import Form from "./Form";

const FormSection = () => (
  <section className={styles.contact_form}>
    <div className={styles.contact_items_container}>
      <div className={styles.contact_item}>
        <div className={styles.contact_item_icon}>
          <i className="fas fa-map-marker-alt"></i>
        </div>
        <div className="item_description">
          <h3>Adres:</h3>
          <p>Wrocław</p>
        </div>
      </div>
      <div className={styles.contact_item}>
        <div className={styles.contact_item_icon}>
          <i className="fas fa-phone"></i>
        </div>
        <div className="item_description">
          <h3>Numer telefonu:</h3>
          <p>793-086-672, 792-351-155</p>
        </div>
      </div>
      <div className={styles.contact_item}>
        <div className={styles.contact_item_icon}>
          <i className="far fa-envelope"></i>
        </div>
        <div className="item_description">
          <h3>Email:</h3>
          <a href="mailto:sw.webdev.pl@gmail.com" title="Email">
            sw.webdev.pl@gmail.com
          </a>
        </div>
      </div>
    </div>

    <Form />
  </section>
);
export default FormSection;
