import { z } from "zod";

export const personalAccountLoginSchema = z.object({
  phoneNumber: z
    .string()
    .min(1, "شماره موبایل الزامی است")
    .max(11, "شماره موبایل باید ۱۱ رقم باشد")
    .regex(/^09\d{9}$/, "شماره موبایل باید با ۰۹ شروع شود و ۱۱ رقم باشد"),
});

export type PersonalAccountLoginFormValues = z.infer<
  typeof personalAccountLoginSchema
>;
