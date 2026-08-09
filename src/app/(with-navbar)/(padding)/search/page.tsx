"use client";

import { ProductItem } from "@/components/product/ProductItem";
import SearchInput from "@/components/shared/inputs/SearchInput";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Menu, SlidersHorizontal } from "lucide-react";
import Image from "next/image";

const categories = [
  {
    id: 1,
    name: "همه",
    value: "all",
  },
  {
    id: 2,
    name: "سلامتی",
    value: "health",
  },
  {
    id: 3,
    name: "لذیذ",
    value: "delicious",
  },
  {
    id: 4,
    name: "تکنولوژی",
    value: "technology",
  },
];

const SearchPage = () => {
  return (
    <>
      <div className="flex-between mb-5">
        <Menu />
        <Image
          src="/images/bodokado-logo.png"
          width={62}
          height={62}
          alt="bodokado-logo"
        />
      </div>
      <div className="flex flex-row items-center gap-5 mb-5">
        <SearchInput
          value=""
          onChange={() => {}}
          className="rounded-lg bg-background shadow flex-1"
          placeholder="جستجو"
        />
        <SlidersHorizontal />
      </div>
      <Tabs>
        <TabsList variant={"accent"}>
          {categories.map((category) => (
            <TabsTrigger key={category.id} value={category.value}>
              {category.name}
            </TabsTrigger>
          ))}
        </TabsList>
        {categories.map((category) => (
          <TabsContent key={category.id} value={category.value} className={"animate-none"}>
            <div className="grid grid-cols-2 gap-5">
              {Array.from({ length: 2 }).map((_, i) => (
                <ProductItem
                  key={i}
                  title="پرالین‌های دست‌ساز"
                  imageSrc={`/samples/sample-product-${i % 2 ? 5 : 6}.jpg`}
                  className="gap-2 items-start"
                  titleClassName="text-xl"
                  storeName="مجموعه نوآر"
                  rating="4.9"
                  badgeVariant="like"
                  style={{
                    animationDelay: `${(i + 4) * 50}ms`,
                  }}
                />
              ))}
              {Array.from({ length: 2 }).map((_, i) => (
                <ProductItem
                  key={i}
                  title="آویز هاله قرمز"
                  imageSrc={`/samples/sample-product-${i % 2 ? 15 : 16}.jpg`}
                  className="gap-2 items-start"
                  titleClassName="text-xl"
                  storeName="مجموعه نوآر"
                  rating="4.9"
                  badgeVariant="like"
                  style={{
                    animationDelay: `${(i + 4) * 50}ms`,
                  }}
                />
              ))}
              {Array.from({ length: 2 }).map((_, i) => (
                <ProductItem
                  key={i}
                  title="پرالین‌های دست‌ساز"
                  imageSrc={`/samples/sample-product-${i % 2 ? 5 : 6}.jpg`}
                  className="gap-2 items-start"
                  titleClassName="text-xl"
                  storeName="مجموعه نوآر"
                  rating="4.9"
                  badgeVariant="like"
                  style={{
                    animationDelay: `${(i + 4) * 50}ms`,
                  }}
                />
              ))}
              {Array.from({ length: 2 }).map((_, i) => (
                <ProductItem
                  key={i}
                  title="آویز هاله قرمز"
                  imageSrc={`/samples/sample-product-${i % 2 ? 15 : 16}.jpg`}
                  className="gap-2 items-start"
                  titleClassName="text-xl"
                  storeName="مجموعه نوآر"
                  rating="4.9"
                  badgeVariant="like"
                  style={{
                    animationDelay: `${(i + 4) * 50}ms`,
                  }}
                />
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </>
  );
};

export default SearchPage;
