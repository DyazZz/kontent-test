import { FC } from "react";
import LocationIcon from "@shared/assets/svg/location.svg";
import { formatDate } from "@shared/lib/formatDate";

import { ShippingItem } from "../../../model/shippings.types";
import styles from "./styles.module.css";

interface Props {
  data: ShippingItem;
}

export const Location: FC<Props> = ({ data }) => {
  const { location, date } = data;

  return (
    <div className={styles.container}>
      <img src={LocationIcon} />
      <p>{location}</p>
      <span>{formatDate(date)}</span>
    </div>
  );
};
