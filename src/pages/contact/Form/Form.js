import React, { Component } from "react";
import styles from "./Form.module.scss";
import emailjs from "emailjs-com";
import PopUp from "../PopUp/PopUp";
import Loader from "../../../smallComponents/Loader/Loader";

class Form extends Component {
  state = {
    showPopUp: false,
    message: "",
    loader: false,
  };

  timeOutPopUp = () => {
    setTimeout(() => {
      this.setState({ showPopUp: false });
    }, 3000);
  };

  sendEmail = (e) => {
    e.preventDefault();
    this.setState({ loader: true });
    emailjs
      .sendForm(
        "SW-gmail",
        "template_pos9036",
        e.target,
        "user_j8CCjLtpRu9pLsVRrz4Up"
      )
      .then(
        (result) => {
          console.log(result.text);
          this.timeOutPopUp();
          this.setState({
            showPopUp: true,
            message: result.text,
            loader: false,
          });
        },
        (error) => {
          console.log(error.text);
          this.timeOutPopUp();
          this.setState({
            showPopUp: true,
            message: error.text,
            loader: false,
          });
        }
      );
    e.target.reset();
  };
  render() {
    return (
      <>
        <form className={styles.form} onSubmit={this.sendEmail}>
          <input
            className={styles.input}
            name="name"
            id="name"
            type="text"
            placeholder="Imię*"
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
            placeholder="Wiadomość*"
            required
          />
          <button
            type="submit"
            className={styles.submit_btn}
            title="Send Message"
            id="submit-message"
          >
            Wyślij wiadomość
          </button>
        </form>
        {this.state.loader ? <Loader /> : null}
        <PopUp message={this.state.message} show={this.state.showPopUp} />
      </>
    );
  }
}

export default Form;
