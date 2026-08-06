import React from "react";
import SharedProfileHeader from "../_components/SharedProfileHeader";
import { toPersianDigits } from "@/utils/numberConversions";
import { BanknoteArrowUp, CircleAlert, Plus, ShoppingBag, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductSection } from "../../home/_components/product/ProductSection";
import { ProductSectionHeader } from "../../home/_components/product/ProductSectionHeader";
import RecentTransactionItem, { TransactionItem } from "./_components/RecentTransactionItem";

const transactionMockData:TransactionItem[] = [
  {
    id:1,
    title: "خرید",
    description: "امروز، ۱۴۰۵ تکمیل شده",
    icon: <ShoppingBag className="size-5"/>,
    balance: -150000
  },
  {
    id:2,
    title: "شارژ کیف پول",
    description: "امروز، ۱۴۰۵ تکمیل شده",
    icon: <BanknoteArrowUp className="size-5"/>,
    balance: 200000
  },
  {
    id:3,
    title: "رزرو اختصاصی",
    description: "۲۴ ااکتبر ۲۰۲۳: موفق",
    icon: <CircleAlert className="size-5 text-primary"/>,
    balance: 150000,
    iconTheme: "primary"
  },
  {
    id:4,
    title: "رزرو اختصاصی",
    description: "۲۴ ااکتبر ۲۰۲۳: نا موفق",
    icon: <CircleAlert className="size-5"/>,
    balance: 150000,
    iconTheme: "destructive"
  },
]

export default function WalletPage() {
  return (
    <div className="space-y-12">
      <SharedProfileHeader
        title="کیف پول"
        description="وجوه و کارت‌های هدیه خود را به طور یکپارچه مدیریت کنید."
        className="mb-8"
      />
      <div className="bg-secondary text-secondary-foreground rounded-3xl p-8 flex-between mb-5">
        <div className="flex-1 space-y-4">
          <p className="text-muted-foreground">{"موجودی"}</p>
          <h2 className="font-bold text-3xl">
            {toPersianDigits((150000).toLocaleString()) + " تومان"}
          </h2>
        </div>
        <Wallet className="text-accent" />
      </div>
      <Button variant={"outlineSecondary"}>
        <Plus />
        {"افزایش موجودی"}
      </Button>
      <ProductSection>
        <ProductSectionHeader title="معاملات اخیر" link="/" variant={"centered"}/>
        {transactionMockData.map((t) => <RecentTransactionItem key={t.id} transaction={t}/>)}
      </ProductSection>
    </div>
  );
}
