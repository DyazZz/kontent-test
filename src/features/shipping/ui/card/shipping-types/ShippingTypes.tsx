import { FC } from "react";
import BoxIcon from "@shared/assets/svg/box.svg";
import { pluralize } from "@shared/lib/pluralize";

import { ShippingItem } from "../../../model/shippings.types";
import styles from "./styles.module.css";

interface Props {
  data: ShippingItem;
}

const TYPES_DISPLAY_COUNT = 3;

export const ShippingTypes: FC<Props> = ({ data }) => {
  const { shippings } = data;

  const displayTypesStr = shippings.slice(0, TYPES_DISPLAY_COUNT).join(", ");

  const otherTypes = shippings.slice(TYPES_DISPLAY_COUNT, shippings.length);
  const otherTypesStr = otherTypes.join(", ");
  const otherTypesCount = otherTypes.length;

  return (
    <div className={styles.types}>
      <img src={BoxIcon} />
      <p>
        Тип груза: <span>{displayTypesStr}</span>
        {otherTypesCount ? (
          <span className={styles.others} title={otherTypesStr}>
            {" "}
            и еще {otherTypesCount}{" "}
            {pluralize(otherTypesCount, ["тип", "типа", "типов"])}
          </span>
        ) : (
          <></>
        )}
      </p>
    </div>
  );
};
