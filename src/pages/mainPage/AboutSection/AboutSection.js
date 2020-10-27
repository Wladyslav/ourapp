import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import styles from "./AboutSection.module.scss";

const items_array = [
  {
    icon: "fas fa-code",
    main_text: "MODUŁOWY KOD ",
    sub_text:
      "Projekty są budowane przy użyciu czystego kodu wielokrotnego użytku, co pozwala na łatwą rozbudowę stron. ",
  },
  {
    icon: "fas fa-desktop",
    main_text: "USER EXPERIENCE",
    sub_text:
      "Wysoce dopracowany projekt UX / UI, który zapewnia płynny interfejs i łatwą nawigację.",
  },
  {
    icon: "fas fa-database",
    main_text: "ZARZĄDZANIE TREŚCIĄ",
    sub_text:
      "Możliwość zarządania treścią stron przy pomocy systemów CMS, co umożliwia łatwe prowadzenie i aktualizacje serwisu WWW",
  },
];

class AboutSection extends Component {
  render() {
    return (
      <section className={styles.section_container}>
        <div className={styles.slide_up}>
          <Fade bottom>
            <div className={styles.description_container}>
              <p className={styles.logo}>
                <span
                  style={{
                    color: "#666",
                  }}
                >
                  W
                </span>
                <span style={{ color: "#bda67d" }}>S</span>
              </p>
              <p className={styles.description}>
                Freelance Web & App Developer in Brighton with expertise in both
                front and back end development, along with solid UI/UX Design
                skills. Offering a wide range of web and app development
                services, such as bespoke WordPress sites, eCommerce platforms,
                iOS and Android apps, and powerful .NET sites...
              </p>
            </div>

            <div className={styles.title}>
              <p>WEB & APP</p>
              <p>CECHY DEVELOPMENTU</p>
            </div>
            <div className={styles.icon_text_container}>
              {items_array.map((item) => (
                <div className={styles.item} key={item.main_text}>
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
          </Fade>
        </div>
      </section>
    );
  }
}

export default AboutSection;
