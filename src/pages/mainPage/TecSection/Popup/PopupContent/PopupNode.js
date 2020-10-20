import React from "react";
import styles from "./PopupContent.module.scss";
import img from "../../../../../assets/imgs/nodejs.png";

const PopupNode = () => {
  return (
    <div className={styles.tec_description_wrapper}>
      <div
        className={styles.logo}
        style={{ backgroundImage: `url(${img})` }}
      ></div>
      <div className={styles.description}>
        Jest wieloplatformowym oprogramowaniem o otwartym kodzie, które pozwala
        deweloperom na tworzenie wszelkiego rodzaju oprogramowania w języku
        JavaScript pracującym po stronie serwera. Wiele firm i korporacji
        aktywnie korzysta z Node.js. Są to m.in. Airbnb, Aliexpress, Coursea,
        eBay, GoDaddy, Groupon, IBM, LinkedIn, MasterCard, Medium, Microsoft,
        NASA, Netflix, PayPal, Pinterest, Tumblr, Twitter, Walmart, Uber, czy
        Yahoo!.
      </div>
    </div>
  );
};
export default PopupNode;
