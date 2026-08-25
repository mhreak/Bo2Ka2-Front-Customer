import { CalendarDay } from "@/lib/calendar";
import { cn } from "@/lib/utils";
import { toPersianDigits } from "@/utils/numberConversions";
import React from "react";

interface DateItemProps {
  day: CalendarDay;
  isSelected: boolean;
  onSelect: (day:number) => void;
  isToday?:boolean;
}

export default function DateItem({ day, isSelected, isToday=false,onSelect }: DateItemProps) {
  return (
    <div
      className={cn(
        " border border-border size-24 px-8 py-2 rounded-3xl flex flex-col items-center justify-evenly text-secondary cursor-pointer",
        "transition-default",
        isSelected && "bg-gradient text-secondary-foreground",
      )}
      onClick={() => onSelect(day.date.day)}
    >
      <span className={cn("text-muted-foreground text-sm font-light", isSelected && "text-secondary-foreground")}>{day.date.monthName}</span>
      <span className="font-semibold text-3xl">{toPersianDigits(day.date.day)}</span>
      <span className="font-medium">{isToday ?"امروز": day.date.dayOfWeekName}</span>
    </div>
  );
}
