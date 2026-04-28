import { FC } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Loader } from "@shared/components/loader/Loader";
import { useAppDispatch, useAppSelector } from "@app/slice";

import { fetchShippings } from "../../model/shippings.thunks";
import { ShippingCard } from "../card/ShippingCard";
import styles from "./styles.module.css";

const INIT_ITEMS_COUNT = 30;
const PAGINTAION_SIZE = 10;

export const ShippingList: FC = () => {
  const dispatch = useAppDispatch();
  const items = useAppSelector((state) => state.shipping.items);
  const total = useAppSelector((state) => state.shipping.total);
  const loadingError = useAppSelector((state) => state.shipping.error);

  const loadMore = async () => {
    const isInitial = items.length === 0;

    if (isInitial) {
      dispatch(fetchShippings({ limit: INIT_ITEMS_COUNT, offset: 0 }));
    } else {
      dispatch(
        fetchShippings({ limit: PAGINTAION_SIZE, offset: items.length }),
      );
    }
  };

  return (
    <InfiniteScroll
      next={loadMore}
      hasMore={loadingError ? false : total ? items.length < total : true}
      dataLength={items.length}
      loader={<Loader />}
      className={styles.body}
      endMessage={
        <div className={styles.empty}>
          {loadingError
            ? "Не удалось загрузить данные"
            : "Больше грузоперевозок нет"}
        </div>
      }
    >
      <ul>
        {items.map((i) => (
          <ShippingCard data={i} key={i.id} />
        ))}
      </ul>
    </InfiniteScroll>
  );
};
