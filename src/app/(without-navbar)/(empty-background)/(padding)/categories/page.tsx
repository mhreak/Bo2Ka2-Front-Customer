"use client";

import SearchInput from "@/components/shared/inputs/SearchInput";
import { Menu } from "lucide-react";
import Image from "next/image";
import React from "react";
import CategoryItem from "./_components/CategoryItem";
import ComplexItem from "./_components/ComplexItem";
import Gemini from "@/assets/icons/Gemini";

const categorItems = [
  {
    id: 1,
    imageUrl: "/samples/sample-category-4.jpg",
    title: "دکور خانه",
  },
  {
    id: 2,
    imageUrl: "/samples/sample-category-5.jpg",
    title: "سلامتی",
  },
  {
    id: 3,
    imageUrl: "/samples/sample-category-6.jpg",
    title: "تکنولوژی",
  },
];
const complexItems = [
  {
    id: 1,
    imageUrl: "/samples/sample-category-4.jpg",
    title: "جواهرات صنعتگر",
    description: "دیدن قیمت ها",
  },
  {
    id: 2,
    imageUrl: "/samples/sample-category-5.jpg",
    title: "جواهرات صنعتگر",
    description: "دیدن قیمت ها",
  },
];

export default function CategoriesPage() {
  return (
    <div>
      <div className="flex-between">
        <Menu />
        <Image
          src="/images/bodokado-logo.png"
          width={62}
          height={62}
          alt="bodokado-logo"
        />
      </div>
      <SearchInput
        value=""
        onChange={() => {}}
        placeholder="جستجو..."
        className="bg-background my-8"
      />
      <h2 className="font-semibold text-2xl mb-7">دسته بندی ها</h2>
      {categorItems.map((item) => (
        <CategoryItem
          key={item.id}
          imageUrl={item.imageUrl}
          title={item.title}
        />
      ))}
      <h2 className="font-semibold text-2xl my-10">مجموعه های انتخاب شده</h2>
      {complexItems.map((complex) => (
        <ComplexItem
          key={complex.id}
          title={complex.title}
          imageUrl={complex.imageUrl}
          description={complex.description}
        />
      ))}

      <div className="mb-5 rounded-4xl bg-cover bg-center p-8 h-60 bg-[#69647B]">
        <div className="mt-auto h-full flex flex-col justify-center items-center gap-3">
          <Gemini />
          <h2 className="font-semibold text-3xl text-white">
            {"ورودی های جدید"}
          </h2>
          <p className="font-thin text-md mt-1 text-white">
            {"کشف کنید که قدم بعدی چیست"}
          </p>
        </div>
      </div>
    </div>
  );
}
