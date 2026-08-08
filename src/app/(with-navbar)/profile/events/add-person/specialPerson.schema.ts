import { z } from "zod";

export const specialPersonSchema = z.object({
  image: z
    .instanceof(File)
    .nullable()
    .refine(
      (file) => !file || file.size <= 5 * 1024 * 1024,
      "حجم عکس نباید بیشتر از ۵ مگابایت باشد"
    )
    .refine(
      (file) =>
        !file ||
        ["image/jpeg", "image/png", "image/webp"].includes(file.type),
      "فرمت عکس باید JPG، PNG یا WebP باشد"
    ),

  name: z
    .string()
    .min(2, "نام و نام خانوادگی الزامی است")
    .max(100, "نام و نام خانوادگی بیش از حد طولانی است"),

  birthDate: z
    .string()
    .min(1, "تاریخ تولد را انتخاب کنید"),

  relation: z
    .string()
    .min(1, "رابطه را انتخاب کنید"),

  favoriteColors: z
    .array(z.string())
    .min(1, "حداقل یک رنگ را انتخاب کنید"),

  notes: z
    .array(z.string())
    .min(1, "حداقل یک مورد را انتخاب کنید"),

  favorites: z
    .array(z.string())
    .optional(),
});

export type SpecialPersonFormValues = z.infer<
  typeof specialPersonSchema
>;