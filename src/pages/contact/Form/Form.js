import React from "react";
import styles from "./Form.module.scss";
import emailjs from "emailjs-com";

const Form = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "238967",
        "template_mi5vt4p",
        e.target,
        "user_rdQ5eBrRjxOahTixFnpq0"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <form className={styles.form} onSubmit={sendEmail}>
      <input
        className={styles.input}
        name="name"
        id="name"
        type="text"
        placeholder="Name*"
        required
      />
      <input
        className={styles.input}
        name="email"
        id="email"
        type="email"
        placeholder="E-mail*"
        required
      />
      <textarea
        className={styles.textarea}
        name="message"
        id="message"
        placeholder="Message*"
        required
      />
      <input
        type="submit"
        className={styles.submit_btn}
        title="Send Message"
        value="Wyślij wiadomość"
        id="submit-message"
      />
    </form>
  );
};

export default Form;
