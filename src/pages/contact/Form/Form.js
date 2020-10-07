import React from "react";
import styles from "./Form.module.scss";

const Form = () => (
  <form className={styles.form} action="">
    <input
      className={styles.input}
      name="name"
      id="name"
      type="text"
      placeholder="Name*"
      required=""
    />
    <input
      className={styles.input}
      name="email"
      id="email"
      type="email"
      placeholder="E-mail*"
      required=""
    />
    <textarea
      className={styles.textarea}
      name="message"
      id="message"
      placeholder="Message*"
      required=""
    />
  </form>
);
export default Form;
