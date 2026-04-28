import { FC } from "react";
import styles from "./styles.module.css";
import { FooterNavigation } from "./nav/FooterNavigation";
import { GetApp } from "./get-app/GetApp";
import { Socials } from "./socials/Socials";
import { Copyright } from "./copyright/Copyright";

interface Props {}

const AppFooter: FC<Props> = () => {
  return (
    <footer className={styles.body}>
      <div className={styles.container}>
        <section className={styles.top}>
          <FooterNavigation />
          <GetApp />
          <Socials />
        </section>
        <Copyright />
      </div>
    </footer>
  );
};

export default AppFooter;
