import { cn } from "@/lib/utils";
import { toPersianDigits } from "@/utils/numberConversions";
import React from "react";

export interface TransactionItem {
  id: number;
  title: string;
  description?: string;
  balance: string | number;
  icon: React.ReactNode;
  iconTheme?: "default" | "primary" | "destructive";
}

interface RecentTransactionItemProps {
  transaction: TransactionItem;
}

const iconThemeClassNameMapper: Record<
  "default" | "primary" | "destructive",
  string
> = {
  default: "bg-muted",
  primary: "bg-primary-lighter ",
  destructive: "bg-rose-200 text-destructive",
};

export default function RecentTransactionItem({
  transaction,
}: RecentTransactionItemProps) {
  const balance =
    Number(transaction.balance) > 0
      ? toPersianDigits(Number(transaction.balance).toLocaleString())
      : toPersianDigits(
          Math.abs(Number(transaction.balance)).toLocaleString(),
        ) + " -";

  const iconThemeClassName = transaction.iconTheme
    ? iconThemeClassNameMapper[transaction.iconTheme]
    : iconThemeClassNameMapper["default"];
  return (
    <div className="border border-border rounded-4xl p-5 flex flex-row items-center gap-5 mb-2">
      <div className={cn("rounded-full flex-center p-3", iconThemeClassName)}>
        {transaction.icon}
      </div>
      <div className="flex-1">
        <h5 className="text-xl font-semibold">{transaction.title}</h5>
        <p className="text-muted-foreground mt-2">{transaction.description}</p>
      </div>
      <div className="font-semibold text-lg">{balance}</div>
    </div>
  );
}
