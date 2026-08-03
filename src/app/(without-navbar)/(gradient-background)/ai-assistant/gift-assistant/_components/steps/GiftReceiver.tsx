"use client";

import BadgeSelect, { BadgeSelectItem } from "@/components/shared/BadgeSelect";
import ImageSelect from "@/components/shared/ImageSelect";
import Image from "next/image";
import React, { useState } from "react";

export default function GiftReceiver() {
  const [relationId, setRelationId] = useState<number>(1);
  return (
    <>
      <div className="size-60 bg-fuchsia-300 rounded-2xl mx-auto mb-10"></div>
      
      <ImageSelect
      headerText="جنسیت"
        items={[
          {
            id: 1,
            title: "خانم",
            imagePath: "/icons/woman-icon.png",
          },
          {
            id: 2,
            title: "آقا",
            imagePath: "/icons/man-icon.png",
          },
        ]}
        onSelect={() => {}}
        className="mb-8"
      />
      <h3 className="font-semibold text-lg text-right mb-4">رابطه</h3>
      <BadgeSelect
        items={[
          { id: 1, title: "همسر" },
          { id: 2, title: "دوست" },
          { id: 3, title: "پدر یا مادر" },
          { id: 4, title: "همکلاسی" },
        ]}
        selectedId={relationId}
        onSelect={(id) => setRelationId(id)}
      />
    </>
  );
}
