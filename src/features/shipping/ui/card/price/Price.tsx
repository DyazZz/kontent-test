import { FC } from "react";

import { ShippingItem } from "../../../model/shippings.types";
import styles from "./styles.module.css";

interface Props {
  data: ShippingItem;
}

export const Price: FC<Props> = ({ data }) => {
  const { price } = data;

  return (
    <div className={styles.priceContainer}>
      <span>за 1 час </span>
      <span className={styles.price}>от {price} ₽</span>
    </div>
  );
};
