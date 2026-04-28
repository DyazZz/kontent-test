import { FC } from "react";
import Logo from "@shared/assets/svg/logo.svg";
import { HeaderProfile } from "@features/auth";

import styles from "./styles.module.css";

const AppHeader: FC = () => {
  return (
    <header className={styles.container}>
      <div className={styles.body}>
        <a href="#" title="Едем.рф" className={styles.logoContainer}>
          <img src={Logo}></img>
          <span>
            Лучший способ
            <br /> путешествовать дешевле
          </span>
        </a>
        <HeaderProfile />
      </div>
    </header>
  );
};

export default AppHeader;
