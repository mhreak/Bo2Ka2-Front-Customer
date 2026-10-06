import { toPersianDigits } from "@/utils/numberConversions";
import { Minus, Plus } from "lucide-react";
import React from "react";

interface QuantityProps {
  value: number;
  onChange: (val: number) => void;
}

export default function Quantity({ value, onChange }: QuantityProps) {
  return (
    <div className="rounded-3xl bg-muted flex-between items-center gap-5 p-2">
      <span
        onClick={(e) => {
          e.preventDefault();
          onChange(value + 1);
        }}
        className="active:translate-y-1 transition-default"
      >
        <Plus size={15} className="text-muted-foreground" />
      </span>
      <span className="flex-1 w-3">{toPersianDigits(value)}</span>
      <span
        onClick={(e) => {
          e.preventDefault();
          if (value > 0) onChange(value - 1);
        }}
        className="active:translate-y-1 transition-default"
      >
        <Minus size={15} className="text-muted-foreground" />
      </span>
    </div>
  );
}
