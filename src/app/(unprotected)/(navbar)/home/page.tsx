"use client";

import SearchInput from "@/components/shared/inputs/SearchInput";
import HomePageHeader from "./_components/HomePageHeader";
import Banner from "@/components/shared/Banner";
import { ProductSection } from "@/components/product/ProductSection";
import { ProductItem } from "@/components/product/ProductItem";
import { ProductSectionHeader } from "@/components/product/ProductSectionHeader";
import CountdownBanner from "./_components/CountdownBanner";
import { SectionContent } from "@/components/SectionContent";
import CategoryBanner from "./_components/CategoryBanner";
import RenderHomePageItems from "./_components/RenderHomePageItems";
import IOSInstallDialog from "@/components/IOSInstallDialog";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-6 overflow-auto hide-scrollbar lg:gap-10">
      <div className="lg:hidden">
        <HomePageHeader />
        <SearchInput value="" onChange={() => {}} placeholder="جستجو" />
      </div>

      <RenderHomePageItems />

      <IOSInstallDialog />

      {/* <Banner
        onClick={() => {}}
        containerCalassName="bg-linear-to-r from-[#9A0606] to-[#FF0000] w-[326px] h-[100px] lg:w-full lg:h-40"
      />
      <ProductSection variant={"contained"}>
        <ProductSectionHeader
          title="پیشنهاد ویژه"
          link="/products"
          titleVariant={"contained"}
          linkVariant={"contained"}
          className="items-center"
        />
        <SectionContent
          variant="scroll"
          className="gap-2 lg:grid lg:grid-cols-4 lg:overflow-visible"
        >
          {Array.from({ length: 4 }).map((_, i) => (
            <ProductItem
              key={i}
              title="مجموعه اسانس‌های گیاهی"
              imageSrc={`/samples/sample-product-${i % 2 ? "1.jpg" : "2.png"}`}
              discountedPrice="۱۸۰,۰۰۰ تومان"
              price="۱۵۰,۰۰۰ تومان"
              variant={"card"}
              imageWidth={300}
              imageHeight={300}
              className="min-w-42 lg:w-full lg:min-w-0"
            />
          ))}
        </SectionContent>
      </ProductSection>
      <ProductSection>
        <ProductSectionHeader
          title="بهترین فروشنده ها"
          description="کالاهای لوکس پرطرفدار این هفته"
          link="/products"
          titleVariant={"default"}
          linkVariant={"default"}
        />
        <SectionContent
          variant="scroll"
          className="lg:grid lg:grid-cols-4 lg:gap-4 lg:overflow-visible"
        >
          <ProductItem
            title="مجموعه اسانس‌های گیاهی"
            imageSrc="/samples/sample-story-4.jpg"
            discountedPrice="۱۸۰,۰۰۰ تومان"
            price="۱۵۰,۰۰۰ تومان"
            className="lg:w-full lg:min-w-0"
          />

          <ProductItem
            title="مجموعه اسانس‌های گیاهی"
            imageSrc="/samples/sample-story-2.jpg"
            discountedPrice="۱۸۰,۰۰۰ تومان"
            price="۱۵۰,۰۰۰ تومان"
            className="lg:w-full lg:min-w-0"
          />
        </SectionContent>
      </ProductSection>
      <Banner
        onClick={() => {}}
        containerCalassName="bg-linear-to-r from-[#48B6ED] to-[#4BC1FD] w-[326px] h-[100px] lg:w-full lg:h-40"
      />
      <ProductSection>
        <ProductSectionHeader
          title="پنل سازمانی"
          description=" دسترسی به پنل سازمانی خود پیدا کنید"
          link="/products"
          titleVariant={"default"}
          linkVariant={"default"}
        />
        <SectionContent
          variant="scroll"
          className="lg:grid lg:grid-cols-4 lg:gap-4 lg:overflow-visible"
        >
          <ProductItem
            title="مجموعه اسانس‌های گیاهی"
            imageSrc="/samples/sample-story-4.jpg"
            discountedPrice="۱۸۰,۰۰۰ تومان"
            price="۱۵۰,۰۰۰ تومان"
            className="lg:w-full lg:min-w-0"
          />

          <ProductItem
            title="مجموعه اسانس‌های گیاهی"
            imageSrc="/samples/sample-story-2.jpg"
            discountedPrice="۱۸۰,۰۰۰ تومان"
            price="۱۵۰,۰۰۰ تومان"
            className="lg:w-full lg:min-w-0"
          />
        </SectionContent>
      </ProductSection>
      <SectionContent
        variant="scroll"
        className="lg:grid lg:grid-cols-3 lg:gap-4 lg:overflow-visible"
      >
        <CountdownBanner seconds={365} />
        <ProductItem
          title="مجموعه اسانس‌های گیاهی"
          imageSrc="/samples/sample-product-3.jpg"
          price="۱۵۰,۰۰۰ تومان"
          discountPercent="۱ ساعت"
          badgeVariant={"special"}
          className="lg:w-full lg:min-w-0"
        />

        <ProductItem
          title="مجموعه اسانس‌های گیاهی"
          imageSrc="/samples/sample-product-4.jpg"
          price="۱۵۰,۰۰۰ تومان"
          discountPercent="۱ ساعت"
          badgeVariant={"special"}
          className="lg:w-full lg:min-w-0"
        />
      </SectionContent>

      <ProductSection>
        <ProductSectionHeader
          title="دسته بند های محبوب"
          link="/categories"
          linkVariant={"primary"}
          variant={"centered"}
        />
        <SectionContent
          variant={"scroll"}
          className="lg:grid lg:grid-cols-4 lg:gap-4 lg:overflow-visible"
        >
          <CategoryBanner
            imageSrc="/samples/sample-category-2.png"
            title="هدیه های لوکس"
            onClick={() => {}}
            className="lg:w-full"
          />
          <CategoryBanner
            imageSrc="/samples/sample-category-3.png"
            title="زیور آلات ترند"
            onClick={() => {}}
            className="lg:w-full"
          />
        </SectionContent>
      </ProductSection> */}
    </div>
  );
};

export default HomePage;
