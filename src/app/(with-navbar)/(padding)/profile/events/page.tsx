import React from "react";
import SharedProfileHeader from "../_components/SharedProfileHeader";
import UpComingEvnetItem from "./_components/UpComingEvnetItem";
import { SectionContent } from "@/components/SectionContent";
import SpecialPersonItem from "./_components/SpecialPersonItem";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Link } from "next-view-transitions";

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
  return (
    <div>
      <SharedProfileHeader
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
      <SectionContent>
        {upComingMockData.map((u) => (
          <UpComingEvnetItem
            key={u.id}
            title={u.title}
            description={u.description}
            avatarImagePath={u.avatarImagePath}
            personName={u.personName}
            iconPathName={u.iconPathName}
            //@ts-ignore
            variant={u.variant as "primary" | "default"}
          />
        ))}
      </SectionContent>
      <h5 className="mb-5">افراد خاص</h5>
      {personsMockData.map((p) => (
        <SpecialPersonItem
          key={p.id}
          id={p.id}
          name={p.name}
          description={p.description}
          avatarImagePath={p.avatarImagePath}
          colorPalette={p.colorPalette}
          favorites={p.favorites}
          notes={p.notes}
        />
      ))}
    </div>
  );
}
