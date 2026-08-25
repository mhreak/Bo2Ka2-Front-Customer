import React from "react";
import { InvoiceItem } from "../add-details/types";
import { toPersianDigits } from "@/utils/numberConversions";

interface InvoiceSectionProps {
  invoices: InvoiceItem[];
}

export default function InvoiceSection({ invoices }: InvoiceSectionProps) {
  let totalPrice: number = 0;
  invoices.forEach((i) => {
    totalPrice += i.value;
  });
  return (
    <div className="bg-muted text-muted-foreground rounded-3xl p-7 pt-8 space-y-4">
      {invoices.map((invoice) => (
        <div key={invoice.id} className="flex-between">
          <p>{invoice.title}</p>
          <div className="text-black">
            <span className="font-semibold text-xl">
              {toPersianDigits(invoice.value.toLocaleString())}
            </span>{" "}
            <span>تومان</span>
          </div>
        </div>
      ))}
      <div className="flex-between">
        <p className="text-black font-semibold text-xl">{"جمع"}</p>
        <div className="text-gradient">
          <span className="font-semibold text-xl">
            {toPersianDigits(totalPrice.toLocaleString())}
          </span>{" "}
          <span>تومان</span>
        </div>
      </div>
    </div>
  );
}
