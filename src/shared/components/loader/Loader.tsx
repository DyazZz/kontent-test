import { FC } from "react";
import { Oval } from "react-loader-spinner";
import styles from "./styles.module.css";

export const Loader: FC = () => {
  return <Oval wrapperClass={styles.body} />;
};
