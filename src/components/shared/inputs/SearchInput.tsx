"use client";
import React from "react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Search } from "lucide-react";

interface Props extends Omit<
  React.ComponentProps<"input">,
  "value" | "defaultValue" | "onChange"
> {
  value: string;
  onChange: (value: string) => void;
}

const SearchInput = ({ value, onChange, ...props }: Readonly<Props>) => {
  return (
    <InputGroup className="rounded-4xl bg-input">
      <InputGroupInput
        value={value ?? ""}
        onChange={(e) => onChange(e.target.value)}
        type={"text"}
        {...props}
      />
      <InputGroupAddon align="inline-start">
        <Search />
      </InputGroupAddon>
    </InputGroup>
  );
};

export default SearchInput;
