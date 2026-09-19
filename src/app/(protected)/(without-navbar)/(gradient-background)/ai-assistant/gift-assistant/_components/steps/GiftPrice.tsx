import BadgeSelect from "@/components/shared/BadgeSelect";
import { Slider } from "@/components/ui/slider";
import { useGiftAssistantStore } from "@/stores/gift-assistant/giftAssistant.store";
import { toPersianDigits } from "@/utils/numberConversions";
import { useState } from "react";

export default function GiftPrice() {
  const giftPriceData = useGiftAssistantStore((state) => state.giftPrice);
  const setGiftPrice = useGiftAssistantStore((state) => state.setGiftPrice);
  const setPriceFrom = useGiftAssistantStore((state) => state.setPriceFrom);
  const setPriceTo = useGiftAssistantStore((state) => state.setPriceTo);

  return (
    <>
      <div className="flex-between mb-16">
        <h3 className="font-semibold text-2xl text-right">قیمت</h3>
        <div>
          {giftPriceData.priceTo ? (
            <>
              <span
                key={1}
                className="font-semibold text-2xl ml-4 animate-in fade-in zoom-in duration-200"
              >
                {toPersianDigits(giftPriceData.priceTo?.toLocaleString())}
              </span>
              <span key={2} className="mx-2">
                -
              </span>
              <span className="font-semibold text-2xl">
                {toPersianDigits(giftPriceData.priceFrom.toLocaleString())}
              </span>
              <span className="font-semibold text-xl">تومان</span>
            </>
          ) : (
            <span className="font-semibold text-2xl ml-4 animate-fade-in duration-200">
              بدون محدودیت
            </span>
          )}
        </div>
      </div>
      <div className="mx-auto mb-16">
        <Slider
          value={[giftPriceData.priceFrom, giftPriceData.priceTo ?? 10000000]}
          // value={[500000, 10000000]}
          onValueChange={(value) =>
            setGiftPrice({
              priceFrom: (value as number[])[0],
              priceTo: (value as number[])[1],
            })
          }
          min={500000}
          max={50000000}
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
            id: 1500000,
            title: "۱،۵۰۰،۰۰۰",
          },
          {
            id: 5500000,
            title: "۵،۵۰۰،۰۰۰",
          },
          {
            id: 8000000,
            title: "۸،۰۰۰،۰۰۰",
          },
          {
            id: 10000000,
            title: "۱۰،۰۰۰،۰۰۰",
          },
          {
            id: 20000000,
            title: "۲۰،۰۰۰،۰۰۰",
          },
        ]}
        onSelect={(id) => {
          if (typeof id === "number") {
            if (id !== 0) {
              setPriceTo(id);
            } else if (id === 0) {
              setPriceTo(undefined);
            }
          }
        }}
        selectedId={giftPriceData.priceTo ?? 0}
      />
    </>
  );
}
