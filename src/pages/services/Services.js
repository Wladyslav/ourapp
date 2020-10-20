import React, { Component } from "react";
import SubpageHeader from "../../smallComponents/SubpageHeader/SubpageHeader";
import styles from './Services.module.scss';

class Services extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <>
        <section className={styles.services_container}>
           <SubpageHeader>Usługi</SubpageHeader>
        </section>
      </>
    );
  }
}
export default Services;
