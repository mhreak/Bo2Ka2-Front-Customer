"use client";

import { ProductItem } from "@/app/(with-navbar)/home/_components/product/ProductItem";
import BackButton from "@/components/shared/BackButton";
import SearchInput from "@/components/shared/inputs/SearchInput";

const SearchPage = () => {
  return (
    <>
      <div className="sticky top-2 right-5 left-5 flex flex-row justify-start gap-5 items-center mb-8 z-100">
        <BackButton />
        <SearchInput
          value=""
          onChange={() => {}}
          placeholder="جستجوی کادو"
          className="flex-1"
        />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 2xl-grid-cols-10 gap-5 mt-10">
        {Array.from({ length: 30 }).map((_, i) => (
          <ProductItem
            key={i}
            title="پرالین‌های دست‌ساز"
            imageSrc={`/samples/sample-product-${i % 2 ? 5 : 6}.jpg`}
            variant="card"
            className="gap-2"
            imageWidth={143}
            imageHeight={125}
            imageClassName="w-[143px] max-h-[125px]"
            titleClassName="text-xl"
            storeName="مجموعه نوآر"
            rating="4.9"
            badgeVariant="like"
          />
        ))}
      </div>
    </>
  );
};

export default SearchPage;
