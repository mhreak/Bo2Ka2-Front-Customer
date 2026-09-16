import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import React from "react";

interface ColorItemProps {
  colorId: number;
  colorCode: string;
  isSelected: boolean;
  onSelect: (id: number) => void;
}

export default function ColorItem({
  colorId,
  colorCode,
  isSelected,
  onSelect,
}: ColorItemProps) {
  return (
    <div
      className={cn(
        "rounded-full p-3 m-2 size-18 flex-center border transition ring-2 ring-offset-2 ring-muted",
        isSelected && "ring-primary",
      )}
      style={{ backgroundColor: colorCode }}
    >
      {isSelected && <Check size={15} className="text-white" />}
    </div>
  );
}
