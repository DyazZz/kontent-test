import { FC } from "react";
import Telegram from "@shared/assets/svg/telegram.svg";
import VK from "@shared/assets/svg/vk.svg";
import OK from "@shared/assets/svg/ok.svg";
import styles from "./styles.module.css";

export const Socials: FC = () => {
  return (
    <div className={styles.socials}>
      <a href="#" target="_blank" rel="noopener noreferrer" title="Вконтакте">
        <img src={VK} />
      </a>
      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        title="Одноклассники"
      >
        <img src={OK} />
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer" title="Телеграм">
        <img src={Telegram} />
      </a>
    </div>
  );
};
