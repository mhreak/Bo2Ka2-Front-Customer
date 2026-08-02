import React from "react";
import { OrderData } from "../_types/order.type";
import ActiveOrderItem from "./ActiveOrderItem";
export const orderCardMock: OrderData[] = [
  {
    id: 1,

    orderCode: "51420",

    product: {
      id: 101,
      title: "چراغ آویز اوپالین",
      description: "بسته‌بندی با کاغذ ابریشمی نیمه‌شب",
      image: "/samples/sample-product-9.png",
    },

    status: {
      text: "در حال انجام",
      current: "packed",

      steps: [
        {
          key: "registered",
          title: "مکان",
          completed: true,
          current: false,
        },
        {
          key: "packed",
          title: "بسته‌بندی",
          completed: true,
          current: true,
        },
        {
          key: "shipping",
          title: "حمل و نقل",
          completed: false,
          current: false,
        },
        {
          key: "delivered",
          title: "تحویل",
          completed: false,
          current: false,
        },
      ],
    },

    delivery: {
      recipient: "اصفهان، خیابان نظر، کوچه لاله",
      address: "اصفهان، خیابان نظر، کوچه لاله",
    },

    schedule: {
      date: "1405/05/12",
      timeFrom: "20:00",
      timeTo: "22:00",
    },

    actions: {
      canTrack: true,
      trackingUrl: "/orders/1/tracking",
    },
  },
  {
    id: 2,

    orderCode: "72891",

    product: {
      id: 205,
      title: "صندلی راحتی آریا",
      description: "بسته‌بندی با کاغذ ابریشمی نیمه‌شب",
      image: "/samples/sample-product-8.jpg",
    },

    status: {
      text: "در حال ارسال",
      current: "shipping",

      steps: [
        {
          key: "registered",
          title: "مکان",
          completed: true,
          current: false,
        },
        {
          key: "packed",
          title: "بسته‌بندی",
          completed: true,
          current: false,
        },
        {
          key: "shipping",
          title: "حمل و نقل",
          completed: true,
          current: true,
        },
        {
          key: "delivered",
          title: "تحویل",
          completed: false,
          current: false,
        },
      ],
    },

    delivery: {
      recipient: "تهران، سعادت‌آباد، بلوار دریا، پلاک ۲۳",
      address: "تهران، سعادت‌آباد، بلوار دریا، پلاک ۲۳",
    },

    schedule: {
      date: "1405/05/15",
      timeFrom: "09:00",
      timeTo: "12:00",
    },

    actions: {
      canTrack: true,
      trackingUrl: "/orders/2/tracking",
    },
  },
];

export default function ActiveOrdersTab() {
  return (
    <div>
      <p className="mb-3">در حال انجام</p>
      {orderCardMock.map((order) => <ActiveOrderItem key={order.id} order={order}/>)}
    </div>
  );
}
