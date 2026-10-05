"use client";

import * as React from "react";
import { Input } from "@/components/ui/input";
import { toEnglishDigits, toPersianDigits } from "@/utils/numberConversions";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { cn } from "@/lib/utils";

export interface PersianNumberInputProps extends Omit<
  React.ComponentProps<"input">,
  "value" | "defaultValue" | "onChange"
> {
  value?: string;
  onChange?: (value: string) => void;
  icon?: React.ReactNode;
  containerClassName?: string;
}

export function PersianNumberInput({
  value = "",
  onChange,
  icon,
  containerClassName,
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
    <InputGroup className={cn(containerClassName)}>
      <InputGroupInput
        {...props}
        inputMode="numeric"
        autoComplete="off"
        // dir="ltr"
        value={displayValue}
        onChange={handleChange}
      />
      {icon && <InputGroupAddon>{icon}</InputGroupAddon>}
    </InputGroup>
  );
}
