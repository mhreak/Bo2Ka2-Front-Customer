import { create } from "zustand";
import { CartStore } from "./cart.types";

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],

  addItem: (product, quantity = 1) =>
    set((state) => {
      const existingItem = state.items.find((item) => item.id === product.id);

      if (existingItem) {
        return {
          items: state.items.map((item) =>
            item.id === product.id
              ? {
                  ...item,
                  quantity: item.quantity + quantity,
                }
              : item,
          ),
        };
      }

      return {
        items: [
          ...state.items,
          {
            ...product,
            quantity,
          },
        ],
      };
    }),

  setQuantity: (productId, quantity) =>
    set((state) => ({
      items:
        quantity === 0
          ? state.items.filter((item) => item.id !== productId)
          : state.items.map((item) =>
              item.id === productId
                ? {
                    ...item,
                    quantity,
                  }
                : item,
            ),
    })),
  getProductQuantity: (productId) =>
    get().items.find((item) => item.id === productId)?.quantity ?? 0,

  hasItem: (productId) => get().items.some((item) => item.id === productId),

  removeItem: (productId) =>
    set((state) => ({
      items: state.items.filter((item) => item.id !== productId),
    })),

  clearCart: () => set({ items: [] }),
}));
