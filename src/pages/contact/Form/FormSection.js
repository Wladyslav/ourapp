import React from "react";
import styles from "./FormSection.module.scss";
import Form from "./Form";

const FormSection = () => (
  <section className={styles.contact_form}>
    <div className={styles.contact_items_container}>
      <div className={styles.contact_item}>
        <div className={styles.contact_item_icon}>
          <i className="fas fa-search-location"></i>
        </div>
        <h3>location</h3>
        <span></span>
      </div>
      <div className={styles.contact_item}>
        <div className={styles.contact_item_icon}>
          <i className="fas fa-phone"></i>
        </div>
        <h3>Call</h3>
        <span></span>
      </div>
      <div className={styles.contact_item}>
        <div className={styles.contact_item_icon}>
          <i className="far fa-envelope"></i>
        </div>
        <h3>Email</h3>
        <span></span>
      </div>
    </div>

    <Form />
  </section>
);
export default FormSection;
