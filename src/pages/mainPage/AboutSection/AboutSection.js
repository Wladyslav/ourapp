import React, { Component } from "react";

import styles from "./AboutSection.module.scss";

const items_array = [
  {
    icon: "fas fa-code",
    main_text: "MODULAR CODE",
    sub_text:
      "Projects are built using clean reusable code, which means projects can be scaled as the business grows.",
  },
  {
    icon: "fas fa-desktop",
    main_text: "USER EXPERIENCE",
    sub_text:
      "Highly polished UX/UI Design to result in a smooth interface and easy navigation, ensuring repeat visits.",
  },
  {
    icon: "fas fa-database",
    main_text: "DATA-DRIVEN",
    sub_text:
      "Allow your website or app to become fully dynamic and data-driven, which opens up unlimited possibilities.",
  },
];

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
              Android apps, and powerful .NET sites.d
            </p>
          </div>
          <div className={styles.title}>
            <p>WEB & APP</p>
            <p>DEVELOPMENT FEATURES</p>
          </div>
          <div className={styles.icon_text_container}>
            {items_array.map((item) => (
              <div className={styles.item}>
                <div className={styles.circle}>
                  <i
                    className={item.icon}
                    style={{ fontSize: "29px", color: "#bfa67a" }}
                  ></i>
                </div>
                <div className={styles.item_text_container}>
                  <p className={styles.main_text}>{item.main_text}</p>
                  <p className={styles.sub_text}>{item.sub_text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default AboutSection;
