"use client";

import PersonWalkIcon from "@/assets/icons/PersonWalkIcon";
import NeshanLeafletMap from "@/components/NeshanLeafletMap";
import SearchInput from "@/components/shared/inputs/SearchInput";
import { Button } from "@/components/ui/button";
import { esfahanLatLng } from "@/constants/esfahanLatLng";
import { toPersianDigits } from "@/utils/numberConversions";
import {
  Clock,
  LocateFixed,
  Map,
  MapPin,
  Menu,
  Star,
  Store,
  X,
} from "lucide-react";
import { Link } from "next-view-transitions";
import Image from "next/image";
import { useState } from "react";

const shopMockData = {
  id: 1,
  name: "سیمین",
  imageUrl: "/samples/sample-shop-2.png",
  rating: 4.9,
  address: "اصفهان نظر",
  commentCount: 124,
  description: `عرضه‌کننده‌ی ظرافت مدرن. مزون ولور
                قطعات استثنایی را گردآوری می‌کند که هنر بی‌زمان را با طراحی معاصر ترکیب می‌کنند.
                مجموعه‌های ما دارای مواد اولیه‌ی اخلاقی و زیبایی‌شناسی چشمگیر و با تضاد بالا هستند.`,
  answer: "98%",
  sale: "850+",
  fallowers: "1.2k",
  distanceStr: "۱.۲ کیلومتر فاصله • ۲۵ دقیقه پیاده‌روی",
  openTimeStr: "امروز تا ساعت ۸ شب باز است",
  products: [
    {
      id: 1,
      imagePath: "/samples/sample-product-6.jpg",
      title: "پرالین های دست ساز",
      price: 150000,
      rating: 4.9,
    },
    {
      id: 2,
      imagePath: "/samples/sample-product-7.jpg",
      title: "پرالین های دست ساز",
      price: 150000,
      rating: 4.9,
    },
    {
      id: 3,
      imagePath: "/samples/sample-product-8.jpg",
      title: "پرالین های دست ساز",
      price: 150000,
      rating: 4.9,
    },
    {
      id: 4,
      imagePath: "/samples/sample-product-9.jpg",
      title: "پرالین های دست ساز",
      price: 150000,
      rating: 4.9,
    },
  ],
};

const markers = [
  {
    id: 1,
    lat: esfahanLatLng.lat,
    lng: esfahanLatLng.lng,

    marker: (
      <div className="flex size-10 items-center justify-center bg-black text-white shadow-lg rounded-full rounded-br-none animate-fade-in">
        <Store />
      </div>
    ),
  },
  {
    id: 1,
    lat: 32.66041277102982,
    lng: 51.682399954290176,

    marker: (
      <div className="flex size-10 items-center justify-center bg-black text-white shadow-lg rounded-full rounded-br-none animate-fade-in">
        <Store />
      </div>
    ),
  },
  {
    id: 1,
    lat: 32.67529698674294,
    lng: 51.671490656177276,

    marker: (
      <div className="flex size-10 items-center justify-center bg-black text-white shadow-lg rounded-full rounded-br-none animate-fade-in">
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
        <div className="bg-white/60 backdrop-blur-sm rounded-4xl z-999 h-130 w-[92%] absolute bottom-5 right-5 left-0 animate-slide-up ">
          <div className="relative w-full aspect-video">
            <Button
              variant={"glass"}
              size={"icon-lg"}
              className={"z-999 absolute top-5 right-5"}
              onClick={() => setT(false)}
            >
              <X className="size-5" />
            </Button>
            <Image
              src={shopMockData.imageUrl}
              fill
              alt="shop"
              className="rounded-t-4xl z-10"
            />
            <div className="absolute inset-x-0 bottom-0 h-2/3 bg-linear-to-t from-white/90 to-transparent z-999" />
          </div>
          <div className="p-5">
            <div className="flex-between">
              <h3 className="font-bold text-xl mb-3 text-text">
                {shopMockData.name}
              </h3>
              <div className="flex flex-row gap-3 items-center">
                <span>{toPersianDigits(shopMockData.rating)}</span>
                <Star className="text-accent size-4" fill="currentColor" />
              </div>
            </div>
            <p className="text-muted-foreground ">{shopMockData.address}</p>
            <div className="flex flex-row gap-3 items-center mt-6">
              <PersonWalkIcon className="text-accent" />
              <p className="text-muted-foreground font-light text-lg">
                {shopMockData.distanceStr}
              </p>
            </div>
            <div className="flex flex-row gap-3 items-center mt-4">
              <Clock className="text-accent size-5" />
              <p className="text-muted-foreground font-light text-lg">
                {shopMockData.openTimeStr}
              </p>
            </div>
            <hr className="mt-3 mb-4" />
            <Link href={`/shop/${shopMockData.id}`}>
              <Button variant={"gradient"}>مشاهده بوتیک</Button>
            </Link>
          </div>
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
        onMapClick={(coords) => {
          console.log(coords);
          setT(false);
        }}
        onMarkerClick={(marker) => {
          setT((prev) => !prev);
        }}
      />
    </div>
  );
}
