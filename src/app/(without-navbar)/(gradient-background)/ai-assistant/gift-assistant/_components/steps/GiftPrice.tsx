import BadgeSelect from "@/components/shared/BadgeSelect";
import { Slider } from "@/components/ui/slider";
import { toPersianDigits } from "@/utils/numberConversions";
import { useState } from "react";

export default function GiftPrice() {
  const [price, setPrice] = useState<number[]>([150000, 300000]);
  const [limit, setLimit] = useState<number>(0);
  return (
    <>
      <div className="flex-between mb-16">
        <h3 className="font-semibold text-2xl text-right">قیمت</h3>
        <div>
          <span
            key={1}
            className="font-semibold text-2xl ml-4 animate-in fade-in zoom-in duration-200"
          >
            {toPersianDigits(price[1].toLocaleString())}
          </span>
          <span key={2} className="mx-2">
            -
          </span>
          <span className="font-semibold text-2xl">
            {toPersianDigits(price[0].toLocaleString())}
          </span>
          <span className="font-semibold text-xl">تومان</span>
        </div>
      </div>
      <div className="mx-auto mb-16">
        <Slider
          value={price}
          onValueChange={(value) => setPrice(value as number[])}
          min={500000}
          max={100000000}
          step={500000}
          className="w-full"
        />
      </div>
      <BadgeSelect
        items={[
          {
            id: 0,
            title: "بدون محدودیت",
          },
          {
            id: 150000,
            title: "۱۵۰،۰۰۰",
          },
          {
            id: 550000,
            title: "۵۵۰،۰۰۰",
          },
          {
            id: 800000,
            title: "۸۰۰،۰۰۰",
          },
          {
            id: 1000000,
            title: "۱،۰۰۰،۰۰۰",
          },
        ]}
        onSelect={(id) => {
          id !== 0 && setPrice((prev) => [prev[0], id]);
          setLimit(id);
        }}
        selectedId={limit}
      />
    </>
  );
}
