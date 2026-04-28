import { FC } from "react";
import styles from "./styles.module.css";

export const Copyright: FC = () => {
  return (
    <section className={styles.container}>
      <div className={styles.copyright}>© 2022 ООО «КОНТЕНТ»</div>
      <a href="#" target="_blank" rel="noopener noreferrer">
        Политика конфиденциальности
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer">
        Пользовательское соглашение
      </a>
    </section>
  );
};
