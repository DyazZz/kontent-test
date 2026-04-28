import { FC, memo } from "react";
import Heading from "@shared/components/heading/Heading";

import { ShippingItem } from "../../model/shippings.types";
import styles from "./styles.module.css";
import { Location } from "./location/Location";
import { ShippingTypes } from "./shipping-types/ShippingTypes";
import { Price } from "./price/Price";

interface Props {
  data: ShippingItem;
}

export const ShippingCard: FC<Props> = memo(({ data }) => {
  const { name, imageUrl } = data;

  return (
    <li>
      <a href="#" className={styles.item}>
        <img src={imageUrl} alt={name} />
        <article className={styles.description}>
          <Heading type="h3">{name}</Heading>
          <Location data={data} />
          <ShippingTypes data={data} />
          <Price data={data} />
        </article>
      </a>
    </li>
  );
});
