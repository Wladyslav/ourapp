import React, { Component } from "react";

import styles from "./AboutSection.module.scss";

class AboutSection extends Component {
  render() {
    return (
      <div className={styles.section_container}>
        <div className="slideUp">
          <div className={styles.description_container}>
            <p className={styles.logo}>
              <span
                style={{
                  color: "#666",
                }}
              >
                S
              </span>
              <span style={{ color: "#bda67d" }}>S</span>
            </p>
            <p class={styles.description}>
              Freelance Web & App Developer in Brighton with expertise in both
              front and back end development, along with solid UI/UX Design
              skills. Offering a wide range of web and app development services,
              such as bespoke WordPress sites, eCommerce platforms, iOS and
              Android apps, and powerful .NET sites.
            </p>
          </div>
          <div className={styles.title}>
            <p>WEB & APP</p>
            <p>DEVELOPMENT FEATURES</p>
          </div>
          <div className={styles.icon_text_container}>
            <div className={styles.item}>
              <i class="fas fa-code" style={{ fontSize: "46px" }}></i>
              <div className={styles.item_text_container}>
                <p>MODULAR CODE</p>
                <p>
                  Projects are built using clean reusable code, which means
                  projects can be scaled as the business grows.
                </p>
              </div>
            </div>
            <div className={styles.item}>
              <i class="fas fa-code" style={{ fontSize: "46px" }}></i>
              <div className={styles.item_text_container}>
                <p>MODULAR CODE</p>
                <p>
                  Projects are built using clean reusable code, which means
                  projects can be scaled as the business grows.
                </p>
              </div>
            </div>
            <div className={styles.item}>
              <i class="fas fa-code" style={{ fontSize: "46px" }}></i>
              <div className={styles.item_text_container}>
                <p>MODULAR CODE</p>
                <p>
                  Projects are built using clean reusable code, which means
                  projects can be scaled as the business grows.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutSection;
