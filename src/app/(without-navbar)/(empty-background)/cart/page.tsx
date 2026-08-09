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
import { InvoiceItem, Time } from "./types";
import TimeItem from "./_components/TimeItem";
import PayMethodItem from "./_components/PayMethodItem";
import { Banknote, Wallet } from "lucide-react";
import InvoiceSection from "./_components/InvoiceSection";
import { Button } from "@/components/ui/button";

const times: Time[] = [
  {
    id: 1,
    startTime: 9,
    endTime: 12,
  },
  {
    id: 2,
    startTime: 14,
    endTime: 17,
  },
  {
    id: 3,
    startTime: 18,
    endTime: 21,
  },
];

const invoicItmes: InvoiceItem[] = [
  {
    id:1,
    title: "جمع فرعی",
    value: 150000
  },
  {
    id:2,
    title: "هزینه بسته بندی (ابریشم)",
    value: 15000
  },
  {
    id:3,
    title: "تحویل (پرمیوم)",
    value: 15000
  },
]

const CartPage = () => {
  const remainingDays = getRemainingDaysOfMonth();
  const [selectedDay, setSelectedDay] = useState<number>(
    remainingDays.currentMonth.day,
  );
  const [selectedTime, setSelectedTime] = useState<number>(9);
  const [t, setT] = useState(true);

  return (
    <div className="space-y-6">
      <div className="flex flex-row">
        <BackButton />
        <h3 className="flex-1 text-center text-2xl font-semibold">سبد خرید</h3>
      </div>
      <div className="">
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
      <div className="my-16 space-y-7">
        <ProductSection>
          <ProductSectionHeader
            title="کارت پستال"
            link="/postal-cards"
            titleVariant={"hero"}
            variant={"centered"}
          />
          <SectionContent variant={"scroll"}>
            <Image
              src={"/samples/postal-card-1.png"}
              width={192}
              height={313}
              alt="postal-1"
            />
            <Image
              src={"/samples/postal-card-2.png"}
              width={130}
              height={313}
              alt="postal-1"
            />
            <Image
              src={"/samples/postal-card-1.png"}
              width={192}
              height={313}
              alt="postal-1"
            />
          </SectionContent>
        </ProductSection>
        <ProductSection>
          <ProductSectionHeader
            title="رنگ کاغذ کادو"
            link="/postal-cards"
            titleVariant={"hero"}
            variant={"centered"}
          />
          <SectionContent>
            <ColorItem
              colorId={1}
              colorCode="#1A1A1A"
              isSelected={true}
              onSelect={() => {}}
            />
            <ColorItem
              colorId={2}
              colorCode="#1D1D1D"
              isSelected={false}
              onSelect={() => {}}
            />
            <ColorItem
              colorId={3}
              colorCode="#E5E2E1"
              isSelected={false}
              onSelect={() => {}}
            />
            <ColorItem
              colorId={4}
              colorCode="#B62417"
              isSelected={false}
              onSelect={() => {}}
            />
          </SectionContent>
        </ProductSection>
        <ProductSection>
          <ProductSectionHeader
            title="سبک روبان"
            link="/postal-cards"
            titleVariant={"hero"}
            variant={"centered"}
          />
          <SectionContent>
            <RibbonItem
              ribbonId={1}
              imagePath="/samples/ribbon-1.jpg"
              title="مخملی زرشکی"
              isSelected={true}
              onSelect={() => {}}
            />
            <RibbonItem
              ribbonId={1}
              imagePath="/samples/ribbon-1.jpg"
              title="ساتن طلایی"
              isSelected={false}
              onSelect={() => {}}
            />
            <RibbonItem
              ribbonId={1}
              imagePath="/samples/ribbon-1.jpg"
              title="ابریشم"
              isSelected={false}
              onSelect={() => {}}
            />
          </SectionContent>
        </ProductSection>
        <ProductSection>
          <ProductSectionHeader
            title="بوی جعبه"
            link="/postal-cards"
            titleVariant={"hero"}
            variant={"centered"}
          />
          <SectionContent className="gap-2">
            <BoxScentItem
              scentId={1}
              title="مخملی زرشکی"
              imagePath="/samples/box-scent.jpg"
              isSelected={true}
              onSelect={() => {}}
            />

            <BoxScentItem
              scentId={2}
              title="ساتن طلایی"
              imagePath="/samples/box-scent.jpg"
              isSelected={false}
              onSelect={() => {}}
            />
            <BoxScentItem
              scentId={3}
              title="چوب عود"
              imagePath="/samples/box-scent.jpg"
              isSelected={false}
              onSelect={() => {}}
            />
            <BoxScentItem
              scentId={4}
              title="ساویج"
              imagePath="/samples/box-scent.jpg"
              isSelected={false}
              onSelect={() => {}}
            />
            <BoxScentItem
              scentId={5}
              title="ساتن طلایی"
              imagePath="/samples/box-scent.jpg"
              isSelected={false}
              onSelect={() => {}}
            />
          </SectionContent>
        </ProductSection>
      </div>
      <ProductSectionHeader
        title="جزئیات تحویل"
        titleVariant={"hero"}
        className="mb-4"
      />
      <AddressSection>
        <AddressDetailSection
          title="مجتمع لاله"
          descrption="اصفهان،خیابان نظرشرقی،کوچه 2"
        />
      </AddressSection>
      <SectionContent>
        {remainingDays.days.map((day) => (
          <DateItem
            key={day.date.day}
            day={day}
            isSelected={day.date.day === selectedDay}
            onSelect={(d) => setSelectedDay(d)}
          />
        ))}
      </SectionContent>
      <SectionContent>
        {times.map((time) => (
          <TimeItem
            key={time.id}
            time={time}
            isSelected={selectedTime === time.startTime}
            onSelect={(id) => setSelectedTime(id)}
          />
        ))}
      </SectionContent>
      <PayMethodItem
        title="پرداخت از کیف پول"
        description="موجودی: ۱۵۰،۰۰۰ تومان"
        value={t}
        onChange={(v) => setT(v)}
        icon={<Wallet className="text-primary-light" />}
      />
      <PayMethodItem
        title="پرداخت قسطی"
        description="پرداخت در ۴ قسط بدون سود"
        value={false}
        onChange={() => {}}
        icon={<Banknote className="text-primary-light" />}
      />
      <InvoiceSection invoices={invoicItmes}/>
      <Button variant={"secondary"} className="w-full">تکمیل خرید</Button>
    </div>
  );
};

export default CartPage;
