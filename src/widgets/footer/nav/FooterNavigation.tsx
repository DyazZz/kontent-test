import { FC } from "react";
import styles from "./styles.module.css";

export const FooterNavigation: FC = () => {
  return (
    <nav className={styles.urls}>
      <ul>
        <li>
          <a>О проекте</a>
        </li>
        <li>
          <a>Блог</a>
        </li>
        <li>
          <a>Безопасность</a>
        </li>
      </ul>

      <ul>
        <li>
          <a>О проекте</a>
        </li>
        <li>
          <a>Блог</a>
        </li>
        <li>
          <a>Вопросы и ответы</a>
        </li>
      </ul>

      <ul>
        <li>
          <a>О проекте</a>
        </li>
        <li>
          <a>Автобусные направления</a>
        </li>
        <li>
          <a>Безопасность</a>
        </li>
      </ul>

      <ul>
        <li>
          <a>О проекте</a>
        </li>
        <li>
          <a>СМИ и Рекламодателям</a>
        </li>
      </ul>
    </nav>
  );
};
