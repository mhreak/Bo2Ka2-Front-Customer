import { z } from "zod";

export const personalAccountLoginSchema = z.object({
  mobile: z
    .number()
    .min(1, "شماره موبایل الزامی است")
    .max(11, "شماره موبایل باید ۱۱ رقم باشد"),
});

export type PersonalAccountLoginFormValues = z.infer<
  typeof personalAccountLoginSchema
>;
