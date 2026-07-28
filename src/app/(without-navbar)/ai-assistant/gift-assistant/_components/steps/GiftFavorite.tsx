import ImageSelect from "@/components/shared/ImageSelect";
import React from "react";

export default function GiftFavorite() {
  return (
    <>
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
        onSelect={() => {}}
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
            imageClassName: "bottom-0"
          },
          {
            id: 4,
            title: "هنرمند",
            imagePath: "/samples/artist.png",
          },
        ]}
        onSelect={() => {}}
        imageClassName="scale-120 bottom-2"
      />
    </>
  );
}
