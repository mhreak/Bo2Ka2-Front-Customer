import { cn } from "@/lib/utils";
import React from "react";
import { Time } from "../types";
import { toPersianDigits } from "@/utils/numberConversions";

interface TimeItemProps {
  time: Time;
  isSelected: boolean;
  onSelect: (id:number) => void;
}

export default function TimeItem({ time, isSelected, onSelect }: TimeItemProps) {
  return (
    <div
      className={cn(
        "border border-border rounded-3xl text-muted-foreground px-4 py-2",
        "transition-default",
        isSelected && "bg-primary-lighter text-primary-light",
      )}
      onClick={() => onSelect(time.startTime)}
    >
      <span>{toPersianDigits(`${time.startTime}:00`)}</span>
      <span>-</span>
      <span>{toPersianDigits(`${time.endTime}:00`)}</span>
    </div>
  );
}
