"use client";

import ImageSelect from "@/components/shared/ImageSelect";
import { Slider } from "@/components/ui/slider";
import { toPersianDigits } from "@/utils/numberConversions";
import { useState } from "react";

export default function GiftPersonality() {
  const [age, setAge] = useState<number>(25);
  return (
    <>
      <div className="size-60 bg-fuchsia-300 rounded-2xl mx-auto mb-16"></div>
      <div className="flex-between mb-5">
        <h3 className="font-semibold text-xl text-right">سن</h3>
        <div>
          <span className="font-semibold text-xl ml-4">
            {toPersianDigits(age)}
          </span>
          <span className="font-semibold text-xl">سال</span>
        </div>
      </div>
      <div className="mx-auto mb-16">
        <Slider
          value={age}
          onValueChange={(value) => setAge(value as number)}
          min={1}
          max={100}
          step={1}
          className="w-full"
        />
      </div>
      <div>
        <ImageSelect headerText="مناسبت" items={[
            {
                id:1,
                title: "تولد",
                imagePath: "/samples/sample-birthday.png"
            },
            {
                id:2,
                title: "سالگرد",
                imagePath: "/samples/sample-anniversary.png"
            },
            {
                id:3,
                title: "عروسی",
                imagePath: "/samples/sample-wedding.png"
            },
            {
                id:4,
                title: "تولد",
                imagePath: "/samples/sample-birthday.png"
            },
        ]} selectedId={1} onSelect={() => {}}/>
      </div>
    </>
  );
}
