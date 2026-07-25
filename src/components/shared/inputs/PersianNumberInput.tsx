"use client";

import * as React from "react";
import { Input } from "@/components/ui/input";
import { toEnglishDigits, toPersianDigits } from "@/utils/numberConversions";

export interface PersianNumberInputProps extends Omit<
  React.ComponentProps<"input">,
  "value" | "defaultValue" | "onChange"
> {
  value?: string;
  onChange?: (value: string) => void;
}

export function PersianNumberInput({
  value = "",
  onChange,
  ...props
}: Readonly<PersianNumberInputProps>) {
  const displayValue = React.useMemo(() => toPersianDigits(value), [value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = toEnglishDigits(e.target.value) || "";

    // فقط عدد
    const numeric = raw.replace(/\D/g, "");

    onChange?.(numeric);
  };

  return (
    <Input
      {...props}
      inputMode="numeric"
      autoComplete="off"
      // dir="ltr"
      value={displayValue}
      onChange={handleChange}
    />
  );
}
