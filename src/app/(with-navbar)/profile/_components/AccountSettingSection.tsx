import {
  PROFILE_SETTING_ITEMS,
  ProfileSettingItem,
} from "@/constants/profileSettingItems";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

interface AccountSettingSectionProps {}

export default function AccountSettingSection({}: AccountSettingSectionProps) {
  return (
    <div className="mb-8">
      <h3 className="font-semibold text-2xl my-5">تنظیمات حساب</h3>
      <div className="border border-border rounded-3xl flex flex-col">
        {PROFILE_SETTING_ITEMS.map((item) => (
          <Link key={item.id} href={item.link} >
            <div className="flex flex-row justify-start items-center gap-4 cursor-pointer active:bg-muted active:scale-[97%] transition-all duration-100 ease-out p-5 rounded-3xl">
              <div className="bg-muted rounded-full p-2">{item.icon}</div>
              <div className="flex-1">
                <h5 className="flex-1 font-bold text-lg">{item.title}</h5>
                {item.description && (
                  <p className="text-sm text-muted-foreground font-light">
                    {item.description}
                  </p>
                )}
              </div>
              <ChevronLeft />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
