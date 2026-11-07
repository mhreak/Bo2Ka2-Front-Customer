"use client";

import React, { useEffect, useState } from "react";
import SharedPageHeader from "@/components/shared/SharedPageHeader";
import UpComingEvnetItem from "./_components/UpComingEvnetItem";
import { SectionContent } from "@/components/SectionContent";
import SpecialPersonItem from "./_components/SpecialPersonItem";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Link } from "next-view-transitions";
import { useApi } from "@/hooks/useApi";
import occasionsApi from "@/api/services/ApiService/occasionsApi";
import { toPersianDigits } from "@/utils/numberConversions";
import { Occasion } from "@/types/api/endpointTypes/occasion.types";

const UPCAMING_DAYS_LIMIT = 30;

const upComingMockData = [
  {
    id: 1,
    title: "تولد سارا",
    description: "امروز، ۱۴:۴۵ تکمیل شده",
    avatarImagePath: "/samples/sample-avatar-4.jpg",
    personName: "سارا احمدی",
    iconPathName: "/icons/birthdate-cake.png",
    variant: "primary",
  },
  {
    id: 2,
    title: "تولد سارا",
    description: "امروز، ۱۴:۴۵ تکمیل شده",
    avatarImagePath: "/samples/sample-avatar-4.jpg",
    personName: "سارا احمدی",
    iconPathName: "/icons/birthdate-cake.png",
    variant: "default",
  },
];

const personsMockData = [
  {
    id: 1,
    name: "سارا احمدی",
    avatarImagePath: "/samples/sample-avatar-5.jpg",
    description: "امروز، ۱۴:۱۵ تکمیل شده",
    colorPalette: ["#E6E6FA", "#2F4F4F", "#F5F5DC"],
    notes: ["ترنج", "چوب صندل"],
    favorites: ["فناوری خوب", "دکور مینیمالیستی"],
  },
  {
    id: 2,
    name: "پارسا محمدی",
    avatarImagePath: "/samples/sample-avatar-6.jpg",
    description: "امروز، ۱۴:۱۵ تکمیل شده",
    colorPalette: ["#0A0A0A", "#708090"],
    notes: ["چرم", "چوب عود"],
    favorites: ["ساعت های مکانیکی", "هنر"],
  },
];

export default function EventsPage() {
  const [upComingOccasions, setUpComingOccasions] = useState<Occasion[]>([]);

  const {
    data: occasionsData,
    isLoading,
    execute: getAllOccasions,
  } = useApi(occasionsApi.getAll, {
    onSuccess(response) {
      const upComing = response.data.filter(
        (occasion) => occasion.daysUntil <= UPCAMING_DAYS_LIMIT,
      );
      setUpComingOccasions(upComing);
    },
  });

  useEffect(() => {
    getAllOccasions();
  }, []);

  return (
    <div>
      <SharedPageHeader
        title="مناسبت ها"
        description="پروفایل‌های منتخب و رویدادهای آینده."
        actionButton={
          <Link href="/profile/events/add-person?mode=add">
            <Button variant={"accent"} size={"icon-lg"}>
              <Plus />
            </Button>
          </Link>
        }
      />
      <h5 className="mb-5">نزدیک شدن سریع</h5>
      {upComingOccasions.length > 0 ? (
        <SectionContent className="lg:grid lg:grid-cols-2 lg:gap-5 lg:overflow-visible">
          {upComingOccasions.map((u) => (
            <UpComingEvnetItem
              key={u.id}
              title={`${u.occasionTypeTitle} ${u.contactName}`}
              description={`${toPersianDigits(u.daysUntil)} روز مانده`}
              avatarImagePath={undefined}
              personName={toPersianDigits(u.displayDate) || ""}
              iconPathName={
                u.occasionTypeName === "Birthday"
                  ? "/icons/birthdate-cake.png"
                  : undefined
              }
              //@ts-ignore
              variant={u.daysUntil <= 10 ? "primary" : "default"}
            />
          ))}
        </SectionContent>
      ) : (
        <div className="border border-dashed rounded-xl text-center font-semibold text-lg text-muted-foreground p-5 max-w-xl mx-auto mb-8">
          در {toPersianDigits(UPCAMING_DAYS_LIMIT)} روز آینده هیچ مناسبتی وجود
          ندارد!
        </div>
      )}
      <h5 className="mb-5">افراد خاص</h5>
      <div className="lg:grid lg:grid-cols-2 lg:gap-5">
        {occasionsData?.data.map((p) => (
          <SpecialPersonItem
            key={p.id}
            id={p.id}
            name={p.contactName}
            description={`${p.occasionTypeTitle} - ${toPersianDigits(p.displayDate)}`}
            avatarImagePath={""}
            colorPalette={[]}
            favorites={p.interests.map((f) => f.title)}
            note={p.notes}
          />
        ))}
      </div>
    </div>
  );
}
