import { z } from "zod";

export const postalCardSchema = z.object({
  cardColor: z.string().min(1, "رنگ کارت را انتخاب کنید"),

  event: z.string().min(1, "مناسب را انتخاب کنید"),

  ownMessage: z.string().optional(),

  audio: z.instanceof(File).optional(),
  image: z.instanceof(File).optional(),
  video: z.instanceof(File).optional(),
});

export type PostalCardFormValues = z.infer<typeof postalCardSchema>;
