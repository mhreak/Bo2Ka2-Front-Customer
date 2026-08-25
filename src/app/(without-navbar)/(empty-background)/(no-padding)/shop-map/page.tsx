"use client";

import NeshanLeafletMap from "@/components/NeshanLeafletMap";
import SearchInput from "@/components/shared/inputs/SearchInput";
import { Button } from "@/components/ui/button";
import { esfahanLatLng } from "@/constants/esfahanLatLng";
import { LocateFixed, Map, MapPin, Menu, Store, X } from "lucide-react";
import { useState } from "react";

const markers = [
  {
    id: 1,
    lat: esfahanLatLng.lat,
    lng: esfahanLatLng.lng,

    marker: (
      <div className="flex size-10 items-center justify-center bg-black text-white shadow-lg rounded-full rounded-br-none ">
        <Store />
      </div>
    ),
  },
];

export default function MapPage() {
  const [t, setT] = useState(false);
  return (
    <div className="relative h-full w-full">
      <Button
        variant={"glass"}
        className={"absolute z-999 top-6 right-5 size-12"}
        size={"icon-lg"}
      >
        <Menu className="size-6" />
      </Button>

      <SearchInput
        value=""
        onChange={() => {}}
        className="absolute top-5 left-5 w-[80%] z-999  bg-white/60 backdrop-blur-sm"
        placeholder="جستجو..."
      />

      {t && (
        <div className="bg-white/60 backdrop-blur-sm rounded-4xl z-999 h-100 w-[92%] absolute bottom-5 right-5 left-0 animate-slide-up p-5">
          <Button variant={"glass"} size={"icon-lg"}>
            <X className="size-5" />
          </Button>
        </div>
      )}

      <NeshanLeafletMap
        mapKey={process.env.NEXT_PUBLIC_NESHAN_API_KEY!}
        center={{
          latitude: esfahanLatLng.lat,
          longitude: esfahanLatLng.lng,
        }}
        zoom={14}
        markers={markers}
        onMapClick={() => setT(false)}
        onMarkerClick={(marker) => {
          setT((prev) => !prev);
        }}
      />
    </div>
  );
}
