"use client";

import BadgeSelect, { BadgeSelectItem } from "@/components/shared/BadgeSelect";
import ImageSelect from "@/components/shared/ImageSelect";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import GiftPersonAvatar from "../GiftPersonAvatar";
import { useGiftAssistantStore } from "@/stores/gift-assistant/giftAssistant.store";

export default function GiftReceiver() {
  const giftReceiverData = useGiftAssistantStore((state) => state.giftReceiver);
  const setRelationId = useGiftAssistantStore((state) => state.setRelationId);
  const setGender = useGiftAssistantStore((state) => state.setGender);

  return (
    <>
      <GiftPersonAvatar
        avatarSrc="/images/young-girl.png"
        avatarAlt="young-girl"
      />

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
            imageClassName: "bottom-[0.7] scale-160",
            imageWidth: 70,
            imageHeight: 70,
          },
        ]}
        selectedId={giftReceiverData.gender}
        onSelect={(id) => {
          setGender(id);
        }}
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
        selectedId={giftReceiverData.relationsId}
        onSelect={(id) => {
          if (typeof id === "number") setRelationId(id);
        }}
      />
    </>
  );
}
