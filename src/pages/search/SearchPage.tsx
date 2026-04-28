import { FC } from "react";
import styles from "./styles.module.css";
import { SearchCount, ShippingList } from "@features/shipping";

const SearchPage: FC = () => {
  return (
    <main className={styles.body}>
      <SearchCount />
      <ShippingList />
    </main>
  );
};

export default SearchPage;
