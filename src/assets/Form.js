// import React, { Component } from "react";
// import styles from "./Form.module.scss";
// import emailjs from "emailjs-com"

// class Form extends Component {
//   state = {
//     name: "",
//     email: "",
//     message: "",
//     emailStatus: "",
//   };
//   handleChange = (e) => {
//     this.setState({
//       [e.target.name]: e.target.value,
//     });
//   };

//   render() {
//     return (
//       <form className={styles.form} action="" onSubmit={this.submitForm}>
//         <input
//           className={styles.input}
//           name="name"
//           id="name"
//           type="text"
//           placeholder="Name*"
//           required=""
//           value={this.state.name}
//           onChange={this.handleChange}
//         />
//         <input
//           className={styles.input}
//           name="email"
//           id="email"
//           type="email"
//           placeholder="E-mail*"
//           required=""
//           value={this.state.email}
//           onChange={this.handleChange}
//         />
//         <textarea
//           className={styles.textarea}
//           name="message"
//           id="message"
//           placeholder="Message*"
//           required=""
//           value={this.state.message}
//           onChange={this.handleChange}
//         />
//         <input
//           type="submit"
//           className={styles.submit_btn}
//           title="Send Message"
//           value="Send Message"
//           id="submit-message"
//         />
//       </form>
//     );
//   }
// }
// export default Form;
