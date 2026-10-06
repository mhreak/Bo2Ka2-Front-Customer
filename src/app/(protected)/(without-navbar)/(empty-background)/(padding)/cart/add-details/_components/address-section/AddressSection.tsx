import { cn } from "@/lib/utils";
import React from "react";
import AddressMapSection from "./AddressMapSection";
import NeshanLeafletMap from "@/components/NeshanLeafletMap";
import { ENV } from "@/config/env";
import { esfahanLatLng } from "@/constants/esfahanLatLng";
import { useMapStore } from "@/stores/map/map.store";

interface AddressSectinProps {
  className?: string;
  children: React.ReactNode;
}

export default function AddressSection({
  className,
  children,
}: AddressSectinProps) {
  const { latitude, longitude } = useMapStore((state) => state);

  return (
    <div className={cn("border border-border rounded-3xl p-5", className)}>
      <div className="h-50 w-full rounded-3xl">
        <NeshanLeafletMap
          mapKey={ENV.NESHAN_MAP_API_KEY}
          center={{
            latitude: latitude ?? esfahanLatLng.lat,
            longitude: longitude ?? esfahanLatLng.lng,
          }}
          zoom={14}
          markers={[
            {
              id: 1,
              lat: latitude ?? esfahanLatLng.lat,
              lng: longitude ?? esfahanLatLng.lng,
              marker: (
                <div className="bg-gradient rounded-full size-10 rounded-br-none rotate-45 flex-center">
                  <div className="size-3 rounded-full bg-white/90" />
                </div>
              ),
              iconAnchor: [17, 45],
            },
          ]}
          onMapClick={(coords) => {
            console.log("map", coords);
          }}
          onMarkerClick={() => {}}
          className="rounded-3xl"
        />
      </div>
      {children}
    </div>
  );
}
