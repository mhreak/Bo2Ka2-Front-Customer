import { create } from "zustand";
import { MapStore } from "./map.types";

export const useMapStore = create<MapStore>((set) => ({
  latitude: null,
  longitude: null,

  setLocation: (latitude, longitude) =>
    set({
      latitude,
      longitude,
    }),

  setLatitude: (latitude) =>
    set({
      latitude,
    }),

  setLongitude: (longitude) =>
    set({
      longitude,
    }),

  clearLocation: () =>
    set({
      latitude: null,
      longitude: null,
    }),
}));
