"use client";
import { useSearchParams } from "next/navigation";
import React, { useState } from "react";
import SharedProfileHeader from "../../_components/SharedProfileHeader";
import ImageUploadInput from "@/components/shared/inputs/ImageUploadInput";
import { Controller, useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import {
  SpecialPersonFormValues,
  specialPersonSchema,
} from "./specialPerson.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { cn } from "@/lib/utils";
import { Check, Diamond, MonitorSmartphone, User } from "lucide-react";
import DatePicker from "react-multi-date-picker";
import { CustomDatePicker } from "@/components/shared/inputs/CustomDatePicker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import BadgeSelect from "@/components/shared/BadgeSelect";
import { SectionContent } from "@/components/SectionContent";

const relations = ["همسر", "خانواده", "دوست", "همکار"];

const colors = ["#171717", "#F5F3E3", "#E7E9FF", "#008B8B", "#32000E"];

const notesOptions = ["چوب صندل", "ترنج", "عود", "کندر"];

const favoriteOptions = [
  {
    icon: <Diamond />,
    label: "لوکس",
  },
  {
    icon: <MonitorSmartphone />,
    label: "تکنولوژی",
  },
];

const AddPerson = () => {
  const params = useSearchParams();
  const mode = params.get("mode");
  const id = params.get("id");

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SpecialPersonFormValues>({
    resolver: zodResolver(specialPersonSchema),
    defaultValues: {
      image: null,
      name: "",
      birthDate: "",
      relation: "",
      favoriteColors: [],
      notes: [],
      favorites: [],
    },
  });

  const onSubmit = (data: SpecialPersonFormValues) => {
    console.log("FORM DATA:", data);
  };

  return (
    <>
      <SharedProfileHeader title="ایجاد پروفایل" />
      <form
        dir="rtl"
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-full flex-col gap-7 pb-10"
      >
        {/* Image */}
        <div className="flex justify-center">
          <Controller
            name="image"
            control={control}
            render={({ field }) => (
              <ImageUploadInput value={field.value} onChange={field.onChange} />
            )}
          />
        </div>

        {errors.image && (
          <p className="text-center text-xs text-red-500">
            {errors.image.message}
          </p>
        )}

        {/* Name */}
        <div className="flex flex-col gap-2">
          <label className="text-lg font-medium text-text">
            نام و نام خانوادگی
          </label>
          <InputGroup>
            <InputGroupInput
              {...register("name")}
              placeholder="لطفاً نام و نام خانوادگی را وارد کنید"
              className={cn(
                errors.name &&
                  "border-destructive focus-visible:ring-destructive",
              )}
            />
            <InputGroupAddon align="inline-start">
              <User className="size-6" />
            </InputGroupAddon>
          </InputGroup>
          {errors.name && (
            <p className="text-xs text-red-500">{errors.name.message}</p>
          )}
        </div>

        {/* Birth Date */}
        <div className="flex flex-col gap-2">
          <label className="text-lg font-medium text-text">تاریخ تولد</label>

          <div className="relative">
            <Controller
              name="birthDate"
              control={control}
              render={({ field }) => (
                <DatePicker
                  value={field.value || ""}
                  onChange={(date) => {
                    field.onChange(date?.isValid ? date.toString() : "");
                  }}
                  render={
                    <CustomDatePicker iconName="Calendar" onClear={() => ""} />
                  }
                  format={"YYYY/MM/DD"}
                  calendar={persian}
                  locale={persian_fa}
                  calendarPosition="bottom-center"
                  className={cn(
                    errors.birthDate &&
                      "border-destructive focus-visible:ring-destructive",
                  )}
                  containerClassName="w-full"
                />
              )}
            />
          </div>

          {errors.birthDate && (
            <p className="text-xs text-red-500">{errors.birthDate.message}</p>
          )}
        </div>

        {/* Relation */}
        <div className="flex flex-col gap-3">
          <label className="text-lg font-medium text-text">رابطه</label>

          <Controller
            name="relation"
            control={control}
            render={({ field }) => (
              <BadgeSelect
                items={relations.map((r, i) => ({ id: r, title: r }))}
                onSelect={(val) => field.onChange(val)}
                selectedId={field.value}
              />
            )}
          />

          {errors.relation && (
            <p className="text-xs text-red-500">{errors.relation.message}</p>
          )}
        </div>

        <h2 className="my-5 text-3xl">هوش زیبایی شناختی</h2>

        {/* Favorite Color */}
        <div className="flex flex-col gap-3">
          <label className="text-lg font-medium text-[#555]">
            رنگ مورد علاقه
          </label>

          <Controller
            name="favoriteColors"
            control={control}
            render={({ field }) => (
              <div className="flex flex-wrap items-center gap-5">
                {colors.map((color) => {
                  const selected = field.value.includes(color);

                  const handleColorSelect = () => {
                    if (selected) {
                      // حذف رنگ
                      field.onChange(
                        field.value.filter(
                          (selectedColor) => selectedColor !== color,
                        ),
                      );
                    } else {
                      // اضافه کردن رنگ
                      field.onChange([...field.value, color]);
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

          {errors.favoriteColors && (
            <p className="text-xs text-red-500">
              {errors.favoriteColors.message}
            </p>
          )}
        </div>

        {/* Notes */}
        <div className="flex flex-col gap-3">
          <label className="text-lg font-medium text-text">مشخصات بو</label>

          <Controller
            name="notes"
            control={control}
            render={({ field }) => (
              <BadgeSelect
                items={notesOptions.map((n) => ({ id: n, title: n }))}
                selectionMode="multiple"
                selectedIds={field.value}
                onSelect={(val) => field.onChange(val)}
              />
            )}
          />

          {errors.notes && (
            <p className="text-xs text-red-500">{errors.notes.message}</p>
          )}
        </div>

        {/* Favorites */}
        <div className="flex flex-col gap-3">
          <label className="text-lg font-medium text-text">
            دسته بندی علاقه مندی ها
          </label>

          <Controller
            name="favorites"
            control={control}
            render={({ field }) => (
              <SectionContent>
                {favoriteOptions.map((item) => {
                  const selected = field.value?.includes(item.label);

                  return (
                    <button
                      key={item.label}
                      type="button"
                      onClick={() => {
                        const current = field.value ?? [];

                        if (selected) {
                          field.onChange(
                            current.filter((value) => value !== item.label),
                          );
                        } else {
                          field.onChange([...current, item.label]);
                        }
                      }}
                      className={cn(
                        `
                      h-32
                      w-40
                      rounded-4xl
                      border
                      border-border
                      bg-muted
                      text-text
                      px-10
                      py-5
                      text-lg
                      transition-all
                      duration-300
                      flex flex-col gap-5 items-center
                      `,
                        selected && "bg-secondary text-secondary-foreground",
                      )}
                    >
                      {item.icon}
                      {item.label}
                    </button>
                  );
                })}
              </SectionContent>
            )}
          />
        </div>

        {/* Submit */}
        <Button type="submit" variant={"gradient"}>
          ذخیره پروفایل
        </Button>
      </form>
    </>
  );
};

export default AddPerson;
