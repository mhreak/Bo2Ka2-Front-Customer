export interface MapStore {
  latitude: number | null;
  longitude: number | null;

  setLocation: (latitude: number, longitude: number) => void;
  setLatitude: (latitude: number) => void;
  setLongitude: (longitude: number) => void;
  clearLocation: () => void;
}
