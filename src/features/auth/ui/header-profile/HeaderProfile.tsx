import { useAppSelector } from "@app/slice";
import { FC } from "react";
import Chat from "@shared/assets/svg/chat.svg";
import Bell from "@shared/assets/svg/bell.svg";
import styles from "./styles.module.css";

export const HeaderProfile: FC = () => {
  const image = useAppSelector((state) => state.auth.userData.img);
  const name = useAppSelector((state) => state.auth.userData.name);
  const notifications = useAppSelector((state) => state.auth.notifications);

  const showNotifications = notifications > 0;

  return (
    <section className={styles.userContainer}>
      <a href="#" title="Сообщения">
        <img src={Chat} />
      </a>
      <a href="#" className={styles.notify}>
        {showNotifications && <span>{notifications}</span>}
        <img src={Bell} title={`Уведомления - ${notifications}`} />
      </a>
      <a href="#" className={styles.user} title="Профиль">
        <img src={image} />
        <span>{name}</span>
      </a>
    </section>
  );
};
