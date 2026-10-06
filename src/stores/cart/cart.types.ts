import { Product } from "@/types/api/endpointTypes/product.types";

export interface CartItem extends Product {
  quantity: number;
}

export interface CartStore {
  items: CartItem[];

  addItem: (product: Product, quantity?: number) => void;
  setQuantity: (productId: string, quantity: number) => void;
  getProductQuantity: (productId: string) => number;
  hasItem: (productId: string) => boolean;
  removeItem: (productId: string) => void;
  clearCart: () => void;
}
