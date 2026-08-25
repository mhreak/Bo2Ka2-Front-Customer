"use client";

import { useParams } from "next/navigation";
import React, { useState } from "react";
import SharedProfileHeader from "../../profile/_components/SharedProfileHeader";
import { cn } from "@/lib/utils";
import { Controller, useForm } from "react-hook-form";
import BadgeSelect from "@/components/shared/BadgeSelect";
import { zodResolver } from "@hookform/resolvers/zod";
import { PostalCardFormValues, postalCardSchema } from "./postalCard.schema";
import { Check, Gift } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import AudioUploadInput from "@/components/shared/inputs/mediaUploadInput/AudioUploadInput";
import VideoUploadInput from "@/components/shared/inputs/mediaUploadInput/VideoUploadInput";
import ImageUploadInput from "@/components/shared/inputs/mediaUploadInput/ImageUploadInput";
import { Button } from "@/components/ui/button";

const events = [
  {
    value: 1,
    label: "تولد",
  },
  {
    value: 2,
    label: "عروسی",
  },
  {
    value: 3,
    label: "سالگرد",
  },
];

const colors = ["#171717", "#F5F3E3", "#E7E9FF", "#008B8B", "#32000E"];

export default function PostalCardPage() {
  const params = useParams<{ id: string }>();
  const postalCardId = params.id;

  const [cardBackground, setCardBackground] = useState<{
    from: string;
    to: string;
  }>({ from: "#69647B", to: "#000000" });

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PostalCardFormValues>({
    resolver: zodResolver(postalCardSchema),
    defaultValues: {
      event: "",
    },
  });

  return (
    <div>
      <SharedProfileHeader title="تنظیم متن تبریک" />
      <div
        className={cn(
          "rounded-3xl p-8 w-full h-40",
          `bg-linear-to-br transition-all duration-300 ease-in-out`,
        )}
        style={{
          background: `linear-gradient(to bottom right, ${cardBackground.from}, ${cardBackground.to})`,
        }}
      ></div>
      <div className="space-y-10 mt-10">
        <div className="flex flex-col gap-3">
          <label className="text-lg font-medium text-text">مناسبت</label>
          <Controller
            name="event"
            control={control}
            render={({ field }) => (
              <BadgeSelect
                items={events.map((event, i) => ({
                  id: event.value,
                  title: event.label,
                }))}
                onSelect={(val) => field.onChange(val)}
                selectedId={field.value}
              />
            )}
          />
        </div>
        <div className="flex flex-col gap-3">
          <label className="text-lg font-medium text-text">رنگ کارت</label>
          <Controller
            name="cardColor"
            control={control}
            render={({ field }) => (
              <div className="flex flex-wrap items-center gap-5">
                {colors.map((color) => {
                  const selected = field.value === color;
                  const handleColorSelect = () => {
                    if (selected) {
                      // حذف رنگ
                      // field.onChange(
                      //   field.value.filter(
                      //     (selectedColor) => selectedColor !== color,
                      //   ),
                      // );
                    } else {
                      // اضافه کردن رنگ
                      field.onChange(color);
                    }
                  };
                  return (
                    <button
                      key={color}
                      type="button"
                      onClick={handleColorSelect}
                      className={`
                  relative
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  transition-all
                  duration-200
                  ${
                    selected
                      ? "scale-110 ring-2 ring-primary ring-offset-2"
                      : "hover:scale-105"
                  }
                `}
                      style={{
                        backgroundColor: color,
                      }}
                      aria-label={color}
                      aria-pressed={selected}
                    >
                      {selected && (
                        <Check
                          className="size-5 text-primary"
                          strokeWidth={2.5}
                        />
                      )}
                    </button>
                  );
                })}
              </div>
            )}
          />
          {errors.cardColor && (
            <p className="text-xs text-red-500">{errors.cardColor.message}</p>
          )}
        </div>
        <div>
          <div className="flex-between mb-5">
            <label className="text-lg font-medium text-text">پیام شما</label>
            <Switch size="sm" />
          </div>
          <div>
            <Controller
              name="ownMessage"
              control={control}
              render={({ field }) => (
                <Textarea
                  id={"ownMessage"}
                  placeholder={"تایپ کنید..."}
                  disabled={false}
                  value={field.value}
                  onChange={field.onChange}
                  onBlur={field.onBlur}
                  rows={5}
                  className={cn(
                    "w-full rounded-3xl bg-muted text-muted-foreground border-0 h-40 p-6",
                    errors.ownMessage &&
                      "border-destructive focus-visible:ring-destructive",
                  )}
                />
              )}
            />
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <label className="text-lg font-medium text-text">
            افرودن محتوا (QR)
          </label>
          <div className="flex flex-row gap-2 mx-auto">
            <Controller
              name="audio"
              control={control}
              render={({ field }) => (
                <AudioUploadInput
                  value={field.value}
                  onChange={field.onChange}
                />
              )}
            />

            <Controller
              name="image"
              control={control}
              render={({ field }) => (
                <ImageUploadInput
                  value={field.value}
                  onChange={field.onChange}
                />
              )}
            />

            <Controller
              name="video"
              control={control}
              render={({ field }) => (
                <VideoUploadInput
                  value={field.value}
                  onChange={field.onChange}
                />
              )}
            />
          </div>
        </div>
        <Button type="submit" variant={"gradient"}>
          <Gift />
          تایید و افرودن به هدیه
        </Button>
      </div>
    </div>
  );
}
