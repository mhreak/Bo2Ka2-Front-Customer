"use client";
import React from "react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { EyeIcon, EyeOffIcon } from "lucide-react";

interface Props extends Omit<
  React.ComponentProps<"input">,
  "value" | "defaultValue" | "onChange"
> {
  value: string;
  onChange: (value: string) => void;
}

const PasswordInput = ({ value, onChange, ...props }: Readonly<Props>) => {
  const [isShowPassword, setIsShowPassword] = React.useState<boolean>(false);
  return (
    <InputGroup>
      <InputGroupInput
        value={value ?? ""}
        onChange={(e) => onChange(e.target.value)}
        type={isShowPassword ? "text" : "password"}
        {...props}
      />
      <InputGroupAddon align="inline-end">
        {isShowPassword ? (
          <EyeOffIcon
            onClick={() => setIsShowPassword((prev) => !prev)}
            className="cursor-pointer size-5"
          />
        ) : (
          <EyeIcon
            onClick={() => setIsShowPassword((prev) => !prev)}
            className="cursor-pointer size-5"
          />
        )}
       
      </InputGroupAddon>
    </InputGroup>
  );
};

export default PasswordInput;
