import {
  BaseFieldConfig,
  FieldOption,
  FormConfig,
  isLayoutConfig,
} from "@/components/formBuilder/types";
import { toEnglishDigits } from "./numberConversions";

export default function validateNationalCode(
  code: number | string,
): boolean | undefined {
  const eCode = toEnglishDigits(code);

  if (eCode === undefined) return undefined;
  if (eCode.length !== 10) return false;

  let sum = 0;

  for (let i = 0; i < 9; i++) {
    sum += Number(eCode[i]) * (10 - i);
  }

  const remainder = sum % 11;
  const checkDigit = Number(eCode[9]);

  return remainder < 2
    ? checkDigit === remainder
    : checkDigit === 11 - remainder;
}

export function toInternationalFormat(phoneNumber: string): string {
  // حذف فاصله‌ها، خط تیره و پرانتز
  const cleaned = phoneNumber.replace(/[\s\-()]/g, "");

  // اگر با +98 شروع شده باشد
  if (cleaned.startsWith("+98")) {
    return cleaned;
  }

  // اگر با 0098 شروع شده باشد
  if (cleaned.startsWith("0098")) {
    return "+98" + cleaned.slice(4);
  }

  // اگر با 98 شروع شده باشد (بدون +)
  if (cleaned.startsWith("98") && cleaned.length === 12) {
    return "+98" + cleaned.slice(2);
  }

  // اگر با 0 شروع شده باشد (فرمت محلی مثل 09131234567)
  if (cleaned.startsWith("0")) {
    return "+98" + cleaned.slice(1);
  }

  // در غیر این صورت فرض می‌کنیم شماره بدون 0 وارد شده
  return "+98" + cleaned;
}

export type FormFieldOptions = Record<string, FieldOption[]>;

export interface GenerateFormConfigOptions<T> {
  values?: T;
  readonlyFields?: string[];
  disabledFields?: string[];
  hiddenFields?: string[];
  visibleFields?: string[];
  options?: Record<string, FieldOption[]>;
  fieldProps?: Record<string, Partial<BaseFieldConfig>>;
}

export function generateFormConfig<T extends Record<string, any>>(
  config: FormConfig,
  {
    values,
    readonlyFields = [],
    disabledFields = [],
    hiddenFields = [],
    visibleFields = [],
    options = {},
    fieldProps = {},
  }: GenerateFormConfigOptions<T>,
): FormConfig {
  const transformField = (field: BaseFieldConfig): BaseFieldConfig => {
    const transformedField: BaseFieldConfig = {
      ...field,
      ...(values !== undefined && {
        defaultValue: values[field.id],
      }),
      ...(fieldProps[field.id] ?? {}),
    };

    if (readonlyFields.includes(field.id)) {
      transformedField.readonly = true;
    }

    if (disabledFields.includes(field.id)) {
      transformedField.disabled = true;
    }

    if (hiddenFields.includes(field.id)) {
      transformedField.visible = false;
    }

    if (visibleFields.includes(field.id)) {
      transformedField.visible = true;
    }

    // پر کردن options برای select و multiselect
    if (
      (field.type === "select" || field.type === "multiselect") &&
      options[field.id]
    ) {
      transformedField.options = options[field.id];
    }

    return transformedField;
  };

  return config.map((item) => {
    // اگر Field باشد
    if (!isLayoutConfig(item)) {
      return transformField(item);
    }

    // اگر Layout باشد
    return {
      ...item,

      // برای section و grid
      children: item.children?.map(transformField),

      // برای tabs و accordion
      items: item.items?.map((tab) => ({
        ...tab,
        children: tab.children.map((child) => {
          if (isLayoutConfig(child)) {
            return child;
          }

          return transformField(child);
        }),
      })),
    };
  });
}

export function toFieldOptions<T>(
  data: T[],
  labelKey: keyof T,
  valueKey: keyof T,
): FieldOption[] {
  return data.map((item) => ({
    label: String(item[labelKey]),
    value: item[valueKey] as string | number,
  }));
}

import { toJalaali } from "jalaali-js";

export function toJalaliDate(
  date: string | null | undefined,
): string | undefined {
  if (!date) return undefined;

  const parsedDate = new Date(date);

  if (Number.isNaN(parsedDate.getTime())) {
    console.warn("Invalid date:", date);
    return undefined;
  }

  const gy = parsedDate.getFullYear();
  const gm = parsedDate.getMonth() + 1;
  const gd = parsedDate.getDate();

  try {
    const { jy, jm, jd } = toJalaali(gy, gm, gd);

    return `${jy}/${String(jm).padStart(2, "0")}/${String(jd).padStart(2, "0")}`;
  } catch (error) {
    console.warn("Failed to convert date to Jalaali:", {
      date,
      gy,
      gm,
      gd,
      error,
    });

    return undefined;
  }
}

export interface GenerateFilterConfigOptions {
  values?: Record<string, any>;
  options?: Record<string, FieldOption[]>;
}
