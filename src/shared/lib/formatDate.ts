export const formatDate = (isoDate: string) => {
  const date = new Date(isoDate);
  const formatter = new Intl.DateTimeFormat("ru-RU", {
    weekday: "short",
    day: "numeric",
    month: "short",
  });

  const parts = formatter.formatToParts(date);
  const res = `${parts[2].value} ${parts[4].value}, ${parts[0].value}`.replace(
    ".",
    "",
  );

  return res;
};
