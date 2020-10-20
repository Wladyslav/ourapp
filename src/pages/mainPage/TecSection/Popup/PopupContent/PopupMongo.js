import React from "react";
import styles from "./PopupContent.module.scss";
import img from "../../../../../assets/imgs/mongodb-1.png";

const PopupMongo = () => {
  return (
    <div className={styles.tec_description_wrapper}>
      <div
        className={styles.logo}
        style={{ backgroundImage: `url(${img})` }}
      ></div>
      <div className={styles.description}>
        Jest to otwarty, nierelacyjny system zarządzania bazą danych napisany w
        języku C++. Interfejsy programistyczne pozwalające obsługiwać bazy
        MongoDB powstały dla wszystkich wiodących języków programowania, w tym
        dla C, C++, Javy, PHP, Perla, Pythona i Rubiego. Wśród znanych
        użytkowników systemu występują: SourceForge, The New York Times, Wielki
        Zderzacz Hadronów
      </div>
    </div>
  );
};
export default PopupMongo;
