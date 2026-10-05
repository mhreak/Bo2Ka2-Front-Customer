"use client";
import React from "react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Search, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props extends Omit<
  React.ComponentProps<"input">,
  "value" | "defaultValue" | "onChange"
> {
  value: string;
  onChange: (value: string) => void;
  onClear?: () => void;
  className?: string;
}

const SearchInput = ({
  value,
  onChange,
  className,
  onClear,
  ...props
}: Readonly<Props>) => {
  return (
    <InputGroup className={cn("rounded-4xl bg-input", className)}>
      <InputGroupInput
        value={value ?? ""}
        onChange={(e) => onChange(e.target.value)}
        type={"text"}
        className="md:text-lg"
        {...props}
      />
      <InputGroupAddon align="inline-start">
        <Search className="size-6" />
      </InputGroupAddon>
      {value && (
        <InputGroupAddon align="inline-end">
          <X
            className="size-6 cursor-pointer active:scale-95"
            onClick={onClear}
          />
        </InputGroupAddon>
      )}
    </InputGroup>
  );
};

export default SearchInput;
