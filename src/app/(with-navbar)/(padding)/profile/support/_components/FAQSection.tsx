import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";

interface FAQItem {
  question: string;
  answer: string;
}

export const FAQItemsMockData: FAQItem[] = [
  {
    question: "چگونه می‌توانم سفارش خود را ثبت کنم؟",
    answer:
      "پس از انتخاب محصول، آن را به سبد خرید اضافه کرده و با تکمیل اطلاعات ارسال و پرداخت، سفارش خود را نهایی کنید.",
  },
  {
    question: "مدت زمان ارسال سفارش چقدر است؟",
    answer:
      "سفارش‌ها معمولاً بین ۲ تا ۵ روز کاری، بسته به شهر مقصد، ارسال و تحویل داده می‌شوند.",
  },
  {
    question: "آیا امکان مرجوع کردن کالا وجود دارد؟",
    answer:
      "بله، در صورت سالم بودن کالا و رعایت شرایط بازگشت، تا ۷ روز پس از دریافت می‌توانید درخواست مرجوعی ثبت کنید.",
  },
  {
    question: "هزینه ارسال چگونه محاسبه می‌شود؟",
    answer:
      "هزینه ارسال بر اساس شهر مقصد و روش ارسال انتخابی محاسبه شده و قبل از پرداخت به شما نمایش داده می‌شود.",
  },
  {
    question: "چگونه می‌توانم وضعیت سفارش خود را پیگیری کنم؟",
    answer:
      "از طریق بخش «سفارش‌های من» در حساب کاربری، می‌توانید آخرین وضعیت سفارش خود را مشاهده کنید.",
  },
  {
    question: "چه روش‌های پرداختی پشتیبانی می‌شود؟",
    answer:
      "امکان پرداخت آنلاین از طریق تمامی کارت‌های عضو شتاب و در برخی شهرها پرداخت در محل نیز فراهم است.",
  },
];

export default function FAQSection() {
  return (
    <>
      <h3 className="mt-12 mb-2  font-bold text-xl">سوالات متداول</h3>
      <Accordion>
        {FAQItemsMockData.map((f) => (
          <AccordionItem key={f.question}>
            <AccordionTrigger className={"text-muted-foreground text-md py-4"}>{f.question}</AccordionTrigger>
            <AccordionContent className="text-text">{f.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
}
