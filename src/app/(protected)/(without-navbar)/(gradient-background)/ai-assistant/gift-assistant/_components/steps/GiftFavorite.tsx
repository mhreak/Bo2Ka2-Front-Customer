import ImageSelect from "@/components/shared/ImageSelect";
import { useGiftAssistantStore } from "@/stores/gift-assistant/giftAssistant.store";
import React from "react";

export default function GiftFavorite() {
  const giftFavoriteData = useGiftAssistantStore((store) => store.giftFavorite);
  const setFavoriteIds = useGiftAssistantStore((store) => store.setFavoriteIds);
  const setJobId = useGiftAssistantStore((store) => store.setJobId);

  return (
    <div className="h-full">
      <ImageSelect
        headerText="علاقه مندی ها"
        items={[
          {
            id: 1,
            title: "لوکس",
            imagePath: "/samples/lux.png",
          },
          {
            id: 2,
            title: "تکنولوژی",
            imagePath: "/samples/pc.png",
          },
          {
            id: 3,
            title: "داستان",
            imagePath: "/samples/book.png",
          },
          {
            id: 4,
            title: "لوکس",
            imagePath: "/samples/lux.png",
          },
        ]}
        selectedIds={giftFavoriteData.favoriteIds}
        selectionMode="multiple"
        onSelect={(ids) => {
          setFavoriteIds(ids);
        }}
        imageClassName="scale-120 bottom-2"
        className="mb-16"
      />
      <ImageSelect
        headerText="شغل"
        items={[
          {
            id: 1,
            title: "کارمند",
            imagePath: "/samples/employee.png",
          },
          {
            id: 2,
            title: "مهندس",
            imagePath: "/samples/engineer.png",
          },
          {
            id: 3,
            title: "دکتر",
            imagePath: "/samples/doctor.png",
            imageClassName: "bottom-0",
          },
          {
            id: 4,
            title: "هنرمند",
            imagePath: "/samples/artist.png",
          },
        ]}
        selectedId={giftFavoriteData.jobId}
        onSelect={(id) => {
          setJobId(id);
        }}
        imageClassName="scale-120 bottom-2"
      />
    </div>
  );
}
