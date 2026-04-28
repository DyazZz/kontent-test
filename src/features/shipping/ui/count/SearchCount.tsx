import { useAppSelector } from "@app/slice";
import Heading from "@shared/components/heading/Heading";
import { pluralize } from "@shared/lib/pluralize";
import { FC } from "react";

export const SearchCount: FC = () => {
  const count = useAppSelector((state) => state.shipping.currentCount);

  if (!count) return null;

  return (
    <Heading type="h1">
      Найдено: {count}{" "}
      {pluralize(count, ["грузоперевозка", "грузоперевозки", "грузоперевозок"])}
    </Heading>
  );
};
