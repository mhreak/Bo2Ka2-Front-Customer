"use client";
import { cn } from "@/lib/utils";
import React, { useState } from "react";

export interface BadgeSelectItem {
  id: number;
  title: string;
}

interface Props {
  items: BadgeSelectItem[];
  selectedId?: number;
  onSelect: (id: number) => void;
}

export default function BadgeSelect({ items, selectedId, onSelect }: Props) {
  return (
    <div className="flex flex-row gap-5 overflow-x-auto hide-scrollbar" >
      {items.map((item) => {
        const colorClasses =
          item.id === selectedId
            ? "bg-select-foreground text-select "
            : "bg-select text-select-foreground";
        return (
          <div
            key={item.id}
            className={cn(
              "border border-select/30 rounded-3xl cursor-pointer px-4 py-2 whitespace-nowrap text-sm",
              "transition-all duration-300 ease-in-out",
              colorClasses,
            )}
            onClick={() => onSelect(item.id)}
          >
            {item.title}
          </div>
        );
      })}
    </div>
  );
}
