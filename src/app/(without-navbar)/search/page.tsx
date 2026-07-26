"use client";

import { ProductItem } from "@/app/(with-navbar)/home/_components/product/ProductItem";
import BackButton from "@/components/shared/BackButton";
import SearchInput from "@/components/shared/inputs/SearchInput";


const SearchPage = () => {
  return (
    <>
      <div className="fixed top-10 right-8 left-8 flex flex-row justify-start gap-8 items-center mb-8 z-100">
        <BackButton />
        <SearchInput
          value=""
          onChange={() => { }}
          placeholder="جستجوی کادو"
          className="flex-1"
        />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-5 mt-20">
        <ProductItem title="پرالین‌های دست‌ساز" imageSrc="/samples/sample-product-5.jpg" variant="card" className="gap-2" imageWidth={143} imageHeight={125} imageClassName="w-[143px] max-h-[125px]" titleClassName="text-xl" storeName="مجموعه نوآر" rating="4.9" badgeVariant="like" />
        <ProductItem title="پرالین‌های دست‌ساز" imageSrc="/samples/sample-product-6.jpg" variant="card" className="gap-2" imageWidth={143} imageHeight={125} imageClassName="w-[143px] max-h-[125px]" titleClassName="text-xl" storeName="مجموعه نوآر" rating="4.9" badgeVariant="like" />
        <ProductItem title="پرالین‌های دست‌ساز" imageSrc="/samples/sample-product-6.jpg" variant="card" className="gap-2" imageWidth={143} imageHeight={125} imageClassName="w-[143px] max-h-[125px]" titleClassName="text-xl" storeName="مجموعه نوآر" rating="4.9" badgeVariant="like" />
        <ProductItem title="پرالین‌های دست‌ساز" imageSrc="/samples/sample-product-5.jpg" variant="card" className="gap-2" imageWidth={143} imageHeight={125} imageClassName="w-[143px] max-h-[125px]" titleClassName="text-xl" storeName="مجموعه نوآر" rating="4.9" badgeVariant="like" />
        <ProductItem title="پرالین‌های دست‌ساز" imageSrc="/samples/sample-product-6.jpg" variant="card" className="gap-2" imageWidth={143} imageHeight={125} imageClassName="w-[143px] max-h-[125px]" titleClassName="text-xl" storeName="مجموعه نوآر" rating="4.9" badgeVariant="like" />
        <ProductItem title="پرالین‌های دست‌ساز" imageSrc="/samples/sample-product-5.jpg" variant="card" className="gap-2" imageWidth={143} imageHeight={125} imageClassName="w-[143px] max-h-[125px]" titleClassName="text-xl" storeName="مجموعه نوآر" rating="4.9" badgeVariant="like" />
        <ProductItem title="پرالین‌های دست‌ساز" imageSrc="/samples/sample-product-6.jpg" variant="card" className="gap-2" imageWidth={143} imageHeight={125} imageClassName="w-[143px] max-h-[125px]" titleClassName="text-xl" storeName="مجموعه نوآر" rating="4.9" badgeVariant="like" />
        <ProductItem title="پرالین‌های دست‌ساز" imageSrc="/samples/sample-product-5.jpg" variant="card" className="gap-2" imageWidth={143} imageHeight={125} imageClassName="w-[143px] max-h-[125px]" titleClassName="text-xl" storeName="مجموعه نوآر" rating="4.9" badgeVariant="like" />
      </div>
    </>
  );
};

export default SearchPage;
