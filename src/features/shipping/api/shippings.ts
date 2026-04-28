import { ShippingItem } from "../model/shippings.types";

const mock = {
  name: "Газель фермер",
  location: "Екатеринбург",
  date: "2026-04-27T14:30:00",
  shippings: [
    "Личные вещи",
    "Стройматериалы",
    "Техника",
    "Техника",
    "Техника",
    "Техника",
  ],
  price: 500,
  imageUrl:
    "https://i.ibb.co/4Rcs359N/02fbf4d2ab8921d404ca009a1b027f8b37375120.png",
};

const totalData: ShippingItem[] = [];

for (let i = 0; i < 103; i++) {
  totalData.push({ ...mock, id: i });
}

interface Response {
  items: ShippingItem[];
  total: number;
}

export const loadShippings = async (
  limit: number,
  offset: number,
): Promise<Response> => {
  return new Promise((resolve) => {
    const items = totalData.slice(offset, offset + limit);
    const total = totalData.length;
    setTimeout(() => {
      resolve({
        items,
        total,
      });
    }, 1500);
  });
};
