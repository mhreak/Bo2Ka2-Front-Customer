"use client";

import React, { useEffect, useRef, useState } from "react";
import { Camera, ImagePlus, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface ImageUploadInputProps {
  value?: File | string | null;
  onChange?: (file: File | null) => void;
  className?: string;
  showCameraIcon?: boolean;
  defaultImage?: string;
}

export default function ImageUploadInput({
  value,
  onChange,
  className,
  showCameraIcon = false,
  defaultImage,
}: ImageUploadInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState<string | null>(
    typeof value === "string" ? value : null,
  );

  useEffect(() => {
    if (defaultImage) {
      setPreview(defaultImage);
    }
  }, [defaultImage]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (!file) return;

    const previewUrl = URL.createObjectURL(file);

    setPreview(previewUrl);
    onChange?.(file);
  };

  const handleRemove = (event: React.MouseEvent) => {
    event.stopPropagation();

    setPreview(null);
    onChange?.(null);

    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  return (
    <div className={cn("flex flex-col items-center", className)}>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFileChange}
      />

      <div
        onClick={() => inputRef.current?.click()}
        className={cn(
          "relative flex size-34",
          "cursor-pointer items-center justify-center",
          "rounded-full border border-border",
          "transition-all duration-200",
          "active:scale-95",
        )}
      >
        {preview ? (
          <>
            <img
              src={preview}
              alt="پروفایل"
              className="h-full w-full rounded-full object-cover"
            />

            <Button
              onClick={handleRemove}
              variant={"destructive"}
              className="
                absolute
                right-1
                top-1
                z-20
                flex-center
                size-7         
            "
            >
              <X className="size-4" />
            </Button>
          </>
        ) : (
          <div className="flex flex-col items-center gap-1">
            <ImagePlus
              className="size-6 text-muted-foreground"
              strokeWidth={1.5}
            />
            <span className="text-[13px] text-muted-foreground">بارگذاری</span>
          </div>
        )}
        {showCameraIcon && (
          <Button
            variant={"gradient"}
            size={"icon-lg"}
            className={"absolute -bottom-2 right-0"}
            onClick={() => inputRef.current?.click()}
          >
            <Camera className="size-6" />
          </Button>
        )}
      </div>
    </div>
  );
}
