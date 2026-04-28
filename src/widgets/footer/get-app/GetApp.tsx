import AppStore from "@shared/assets/svg/app-store.svg";
import GooglePlay from "@shared/assets/svg/google-play.svg";
import styles from "./styles.module.css";
import { FC } from "react";

export const GetApp: FC = () => {
  return (
    <div className={styles.container}>
      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        title="Скачать приложение в App store"
      >
        <img src={AppStore} />
      </a>

      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        title="Скачать приложение в Google play"
      >
        <img src={GooglePlay} />
      </a>
    </div>
  );
};
