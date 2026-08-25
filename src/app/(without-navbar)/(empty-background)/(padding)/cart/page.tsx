"use client";

import BackButton from "@/components/shared/BackButton";
import React, { useState } from "react";
import { CartItem } from "./_components/CartItem";
import { ProductSection } from "@/components/product/ProductSection";
import { ProductSectionHeader } from "@/components/product/ProductSectionHeader";
import { SectionContent } from "@/components/SectionContent";
import Image from "next/image";
import ColorItem from "./_components/ColorItem";
import RibbonItem from "./_components/RibbonItem";
import BoxScentItem from "./_components/BoxScentItem";
import AddressSection from "./_components/address-section/AddressSection";
import AddressDetailSection from "./_components/address-section/AddressDetailSection";
import { getRemainingDaysOfMonth } from "@/lib/calendar";
import DateItem from "./_components/DateItem";
import { InvoiceItem, Time } from "./add-details/types";
import TimeItem from "./_components/TimeItem";
import PayMethodItem from "./_components/PayMethodItem";
import { Banknote, Wallet } from "lucide-react";
import InvoiceSection from "./_components/InvoiceSection";
import { Button } from "@/components/ui/button";
import { Link } from "next-view-transitions";

const CartPage = () => {
  return (
    <div className="space-y-6 h-full flex flex-col justify-between">
      <div className="flex flex-row">
        <BackButton />
        <h3 className="flex-1 text-center text-2xl font-semibold">سبد خرید</h3>
      </div>
      <div className="flex-1">
        {Array.from({ length: 2 }).map((_, i) => (
          <CartItem
            key={i}
            imagePath={`/samples/sample-product-${i % 2 ? "8" : "7"}.jpg`}
            title="چراغ رومیزی"
            description="نور گرم/ درخشش گرم"
            price={300000}
            quantity={1}
            onQuantityChange={() => {}}
            onRemove={() => {}}
          />
        ))}
      </div>
      <Link href={"/cart/add-details"}>
        <Button variant={"secondary"} className="w-full">
          مرحله ی بعد
        </Button>
      </Link>
    </div>
  );
};

export default CartPage;
