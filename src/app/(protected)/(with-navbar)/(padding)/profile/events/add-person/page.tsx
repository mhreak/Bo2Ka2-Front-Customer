"use client";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import SharedPageHeader from "@/components/shared/SharedPageHeader";
import ImageUploadInput from "@/components/shared/inputs/ImageUploadInput";
import { Controller, FieldErrors, useForm } from "react-hook-form";
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
import { PersianDatePicker } from "@/components/persianDatePicker/PersianDatePicker";
import {
  gregorianToJalali,
  jalaliToGregorian,
} from "@/components/formBuilder/utils/date-converter";
import useToast from "@/hooks/useToast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toPersianDigits } from "@/utils/numberConversions";
import { useApi } from "@/hooks/useApi";
import interestsApi from "@/api/services/ApiService/interestsApi";
import jobsApi from "@/api/services/ApiService/jobsApi";
import occasionsApi from "@/api/services/ApiService/occasionsApi";
import { useTransitionRouter } from "next-view-transitions";

const persianMonths = [
  { id: 1, name: "فروردین" },
  { id: 2, name: "اردیبهشت" },
  { id: 3, name: "خرداد" },
  { id: 4, name: "تیر" },
  { id: 5, name: "مرداد" },
  { id: 6, name: "شهریور" },
  { id: 7, name: "مهر" },
  { id: 8, name: "آبان" },
  { id: 9, name: "آذر" },
  { id: 10, name: "دی" },
  { id: 11, name: "بهمن" },
  { id: 12, name: "اسفند" },
];

const daysOfMonth: number[] = Array.from({ length: 31 }, (_, i) => i + 1);

const genderOptions = [
  { id: true, name: "آقا" },
  { id: false, name: "خانم" },
];

const relations = ["همسر", "خانواده", "دوست", "همکار"];

const colors = ["#171717", "#F5F3E3", "#E7E9FF", "#008B8B", "#32000E"];

const notesOptions = ["چوب صندل", "ترنج", "عود", "کندر"];

const AddPerson = () => {
  const params = useSearchParams();
  const mode = params.get("mode");
  const id = params.get("id");

  const { error, success } = useToast();

  const router = useTransitionRouter();

  const { data: interestsData, execute: getAllInterests } = useApi(
    interestsApi.getAll,
  );

  const { data: jobsData, execute: getAllJobs } = useApi(jobsApi.getAll);

  const { data: ageRangesData, execute: getAgeRanges } = useApi(
    occasionsApi.getAgeRanges,
  );

  const { data: occasionTypesData, execute: getOccasionTypes } = useApi(
    occasionsApi.getOccasionTypes,
  );

  const { data: occasionData, execute: getOccasion } = useApi(occasionsApi.get);

  const { isLoading: addLoading, execute: addOccasion } = useApi(
    occasionsApi.add,
    {
      onSuccess(response) {
        success("مناسبت با موفقیت ایجاد شد");
        router.back();
      },
    },
  );
  const { isLoading: editLoading, execute: editOccasion } = useApi(
    occasionsApi.edit,
    {
      onSuccess(response) {
        success("مناسبت با موفقیت ویرایش شد");
      },
    },
  );

  useEffect(() => {
    getAllInterests({ onlyActive: true });
    getAllJobs({ onlyActive: true });
    getAgeRanges();
    getOccasionTypes();

    if (mode === "edit" && id !== null) {
      getOccasion({ id: id });
    }
  }, [mode, id]);

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SpecialPersonFormValues>({
    resolver: zodResolver(specialPersonSchema),
    defaultValues: {
      // image: undefined,
      contactName: "",
      ageRange: undefined,
      gender: undefined,
      jobId: undefined,
      occasionDay: undefined,
      occasionMonth: undefined,
      occasionType: undefined,
      notes: "",
      interestIds: [],
    },
  });

  useEffect(() => {
    if (mode !== "edit" || !occasionData?.data) return;

    const data = occasionData.data;

    reset({
      contactName: data.contactName || "",
      ageRange: data.ageRange,
      gender: data.gender,
      jobId: data.jobId,
      occasionDay: data.occasionDay,
      occasionMonth: data.occasionMonth,
      occasionType: data.occasionType,
      notes: data.notes || "",
      interestIds: data.interests?.map((item) => item.id) || [],
    });
  }, [occasionData, mode, reset]);

  const onSubmit = (data: SpecialPersonFormValues) => {
    console.log("FORM DATA:", data);
    if (mode === "add") addOccasion(data);
    else if (mode === "edit" && id !== null)
      editOccasion({ id: id, data: data });
  };

  const handleInvalidSubmit = (
    errors: FieldErrors<SpecialPersonFormValues>,
  ) => {
    const firstError = Object.values(errors)[0];

    if (firstError?.message) {
      error(firstError.message.toString());
    }
  };

  return (
    <>
      <SharedPageHeader title="ایجاد مناسبت جدید" />
      <form
        dir="rtl"
        onSubmit={handleSubmit(onSubmit, handleInvalidSubmit)}
        className="flex w-full flex-col gap-7 pb-10"
      >
        {/* Image */}
        {/* <div className="flex justify-center">
          <Controller
            name="image"
            control={control}
            render={({ field }) => (
              <ImageUploadInput value={field.value} onChange={field.onChange} />
            )}
          />
        </div> */}

        {/* {errors.image && (
          <p className="text-center text-xs text-red-500">
            {errors.image.message}
          </p>
        )} */}

        {/* Name */}
        <div className="flex flex-col gap-2">
          <label className="text-lg font-medium text-text">
            نام و نام خانوادگی
          </label>
          <InputGroup
            className={cn(
              errors.contactName &&
                "border-destructive focus-visible:ring-destructive",
            )}
          >
            <InputGroupInput
              {...register("contactName")}
              placeholder="لطفاً نام و نام خانوادگی را وارد کنید"
            />
            <InputGroupAddon align="inline-start">
              <User className="size-6" />
            </InputGroupAddon>
          </InputGroup>
          {/* {errors.name && (
            <p className="text-xs text-red-500">{errors.name.message}</p>
          )} */}
        </div>

        <div className="flex items-center gap-2 w-full">
          <div className="flex flex-col gap-2 w-full">
            <label className="text-lg font-medium text-text">ماه مناسبت</label>
            <Controller
              name="occasionMonth"
              control={control}
              render={({
                field: { value, onChange },
                fieldState: { error },
              }) => {
                const selectedOption = persianMonths?.find(
                  (opt) => opt.id === value,
                );
                return (
                  <Select onValueChange={onChange} value={value ?? undefined}>
                    <SelectTrigger
                      id={"occasionMonth"}
                      className={cn(
                        error &&
                          "border-destructive focus-visible:ring-destructive",
                      )}
                    >
                      <SelectValue placeholder={"انتخاب کنید..."}>
                        {selectedOption ? selectedOption.name : null}
                      </SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                      {persianMonths?.map((option) => (
                        <SelectItem key={option.id} value={option.id}>
                          {option.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                );
              }}
            />
          </div>

          <div className="flex flex-col gap-2 w-full">
            <label className="text-lg font-medium text-text">روز مناسبت</label>
            <Controller
              name="occasionDay"
              control={control}
              render={({
                field: { value, onChange },
                fieldState: { error },
              }) => {
                const selectedOption = daysOfMonth?.find(
                  (opt) => opt === value,
                );
                return (
                  <Select onValueChange={onChange} value={value ?? undefined}>
                    <SelectTrigger
                      id={"occasionDay"}
                      className={cn(
                        error &&
                          "border-destructive focus-visible:ring-destructive",
                      )}
                    >
                      <SelectValue placeholder={"انتخاب کنید..."}>
                        {selectedOption
                          ? toPersianDigits(selectedOption)
                          : null}
                      </SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                      {daysOfMonth?.map((option) => (
                        <SelectItem key={option} value={option}>
                          {toPersianDigits(option)}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                );
              }}
            />
          </div>
        </div>

        <div className="flex items-center gap-2 w-full">
          <div className="flex flex-col gap-2 w-full">
            <label className="text-lg font-medium text-text">جنسیت</label>
            <Controller
              name="gender"
              control={control}
              render={({
                field: { value, onChange },
                fieldState: { error },
              }) => {
                const selectedOption = genderOptions?.find(
                  (opt) => opt.id === value,
                );
                return (
                  <Select onValueChange={onChange} value={value ?? undefined}>
                    <SelectTrigger
                      id={"gender"}
                      className={cn(
                        error &&
                          "border-destructive focus-visible:ring-destructive",
                      )}
                    >
                      <SelectValue placeholder={"انتخاب کنید..."}>
                        {selectedOption ? selectedOption.name : null}
                      </SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                      {genderOptions?.map((option) => (
                        <SelectItem key={option.id ? 1 : 2} value={option.id}>
                          {option.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                );
              }}
            />
          </div>

          <div className="flex flex-col gap-2 w-full">
            <label className="text-lg font-medium text-text">محدوده سنی</label>
            <Controller
              name="ageRange"
              control={control}
              render={({
                field: { value, onChange },
                fieldState: { error },
              }) => {
                const selectedOption = ageRangesData?.data?.find(
                  (opt) => opt.value === value,
                );
                return (
                  <Select onValueChange={onChange} value={value ?? undefined}>
                    <SelectTrigger
                      id={"ageRange"}
                      className={cn(
                        error &&
                          "border-destructive focus-visible:ring-destructive",
                      )}
                    >
                      <SelectValue placeholder={"انتخاب کنید..."}>
                        {selectedOption ? selectedOption.title : null}
                      </SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                      {ageRangesData?.data?.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.title}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                );
              }}
            />
          </div>
        </div>

        <div className="flex items-center gap-2 w-full">
          <div className="flex flex-col gap-2 w-full">
            <label className="text-lg font-medium text-text">شغل</label>
            <Controller
              name="jobId"
              control={control}
              render={({
                field: { value, onChange },
                fieldState: { error },
              }) => {
                const selectedOption = jobsData?.data?.find(
                  (opt) => opt.id === value,
                );
                return (
                  <Select onValueChange={onChange} value={value ?? undefined}>
                    <SelectTrigger
                      id={"gender"}
                      className={cn(
                        error &&
                          "border-destructive focus-visible:ring-destructive",
                      )}
                    >
                      <SelectValue placeholder={"انتخاب کنید..."}>
                        {selectedOption ? selectedOption.title : null}
                      </SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                      {jobsData?.data?.map((option) => (
                        <SelectItem key={option.id} value={option.id}>
                          {option.title}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                );
              }}
            />
          </div>

          <div className="flex flex-col gap-2 w-full">
            <label className="text-lg font-medium text-text">نوع مناسبت</label>
            <Controller
              name="occasionType"
              control={control}
              render={({
                field: { value, onChange },
                fieldState: { error },
              }) => {
                const selectedOption = occasionTypesData?.data?.find(
                  (opt) => opt.value === value,
                );
                return (
                  <Select onValueChange={onChange} value={value ?? undefined}>
                    <SelectTrigger
                      id={"occasionType"}
                      className={cn(
                        error &&
                          "border-destructive focus-visible:ring-destructive",
                      )}
                    >
                      <SelectValue placeholder={"انتخاب کنید..."}>
                        {selectedOption ? selectedOption.title : null}
                      </SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                      {occasionTypesData?.data?.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.title}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                );
              }}
            />
          </div>
        </div>

        {/* Birth Date */}
        {/* <div className="flex flex-col gap-2">
          <label className="text-lg font-medium text-text">تاریخ تولد</label>

          <div className="relative">
            <Controller
              name="birthDate"
              control={control}
              render={({
                field: { value, onChange },
                fieldState: { error },
              }) => (
                <PersianDatePicker
                  value={gregorianToJalali(value)}
                  onChange={(date) => {
                    onChange(jalaliToGregorian(date));
                  }}
                  placeholder={"تاریخ تولد"}
                  // error={error?.message}
                  className={cn("w-full")}
                />
              )}
            />
          </div> */}

        {/* {errors.birthDate && (
            <p className="text-xs text-red-500">{errors.birthDate.message}</p>
          )} */}
        {/* </div> */}

        {/* Relation */}
        {/* <div className="flex flex-col gap-3">
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
        </div> */}

        <h2 className="my-5 text-3xl">هوش زیبایی شناختی</h2>

        {/* Favorite Color */}
        {/* <div className="flex flex-col gap-3">
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
        </div> */}

        {/* Notes */}
        <div className="flex flex-col gap-3">
          <label className="text-lg font-medium text-text">مشخصات بو</label>

          <Controller
            name="notes"
            control={control}
            render={({ field }) => (
              <BadgeSelect
                items={notesOptions.map((n) => ({ id: n, title: n }))}
                selectionMode="single"
                selectedId={field.value}
                onSelect={(val) => field.onChange(val)}
              />
            )}
          />

          {/* {errors.notes && (
            <p className="text-xs text-red-500">{errors.notes.message}</p>
          )} */}
        </div>

        {/* Favorites */}
        <div className="flex flex-col gap-3">
          <label className="text-lg font-medium text-text">
            دسته بندی علاقه مندی ها
          </label>

          <Controller
            name="interestIds"
            control={control}
            render={({ field }) => (
              <SectionContent className=" gap-5" variant={"scrollGrid"}>
                {interestsData?.data.map((item) => {
                  const selected = field.value?.includes(item.id);

                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => {
                        const current = field.value ?? [];

                        if (selected) {
                          field.onChange(
                            current.filter((value) => value !== item.id),
                          );
                        } else {
                          field.onChange([...current, item.id]);
                        }
                      }}
                      className={cn(
                        `
                      h-32
                      w-40
                      lg:w-full
                      shrink-0
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
                      {item.title}
                    </button>
                  );
                })}
              </SectionContent>
            )}
          />
        </div>

        {/* Submit */}
        <Button
          type="submit"
          variant={"gradient"}
          isLoading={addLoading || editLoading}
        >
          ذخیره پروفایل
        </Button>
      </form>
    </>
  );
};

export default AddPerson;
