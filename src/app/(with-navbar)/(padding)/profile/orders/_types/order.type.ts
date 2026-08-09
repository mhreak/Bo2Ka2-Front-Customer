export type OrderStatus =
  | "registered"
  | "packed"
  | "shipping"
  | "delivered";

export interface OrderStatusStep {
  key: OrderStatus;
  title: string;
  completed: boolean;
  current: boolean;
}

export interface OrderData {
  id: number;
  orderCode: string;

  product: {
    id: number;
    title: string;
    description:string;
    image: string;
  };

  status: {
    text: string; // در حال انجام
    current: OrderStatus;
    steps: OrderStatusStep[];
  };

  delivery: {
    recipient: string;
    address: string;
  };

  schedule: {
    date: string; // 1405/05/12
    timeFrom: string; // 20:00
    timeTo: string; // 22:00
  };

  actions: {
    trackingUrl?: string;
    canTrack: boolean;
  };
}