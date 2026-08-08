"use client";

import SearchInput from "@/components/shared/inputs/SearchInput";
import HomePageHeader from "./_components/HomePageHeader";
import Stories from "./_components/Stories";
import Banner from "@/components/shared/Banner";
import Categories from "./_components/Categories";
import { ProductSection } from "./_components/product/ProductSection";
import { ProductItem } from "./_components/product/ProductItem";
import { ProductSectionHeader } from "./_components/product/ProductSectionHeader";

import CountdownBanner from "./_components/CountdownBanner";
import {
  StoreCard,
  StoreCardAction,
  StoreCardContent,
  StoreCardImage,
  StoreCardRating,
  StoreCardTitle,
} from "./_components/store";
import { Button } from "@/components/ui/button";
import { SectionContent } from "./_components/SectionContent";
import CategoryBanner from "./_components/CategoryBanner";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-6 overflow-auto hide-scrollbar">
      <HomePageHeader />
      <SearchInput value="" onChange={() => {}} placeholder="جستجو" />
      <Stories />
      <Banner
        onClick={() => {}}
        containerCalassName="bg-pink-300 w-[326px] h-[188px]"
      />
      <Categories />
      <Banner
        onClick={() => {}}
        containerCalassName="bg-gradient w-[326px] h-[100px]"
      />
      <ProductSection>
        <ProductSectionHeader
          title="پیشنهاد ویژه"
          description="قیمت استثنایی برای اعضا"
          link="/products"
          titleVariant={"default"}
          linkVariant={"default"}
          className="items-center"
        />
        <SectionContent variant="scroll">
          <ProductItem
            title="مجموعه اسانس‌های گیاهی"
            imageSrc="/samples/sample-product-1.jpg"
            discountedPrice="۱۸۰,۰۰۰ تومان"
            price="۱۵۰,۰۰۰ تومان"
          />

          <ProductItem
            title="مجموعه اسانس‌های گیاهی"
            imageSrc="/samples/sample-product-2.png"
            discountedPrice="۱۸۰,۰۰۰ تومان"
            price="۱۵۰,۰۰۰ تومان"
          />
        </SectionContent>
      </ProductSection>
      <Banner
        onClick={() => {}}
        containerCalassName="bg-linear-to-r from-[#9A0606] to-[#FF0000] w-[326px] h-[100px]"
      />
      <ProductSection variant={"contained"}>
        <ProductSectionHeader
          title="پیشنهاد ویژه"
          link="/products"
          titleVariant={"contained"}
          linkVariant={"contained"}
          className="items-center"
        />
        <SectionContent variant="scroll" className="gap-2">
          {Array.from({length: 4}).map((_,i) => (
            <ProductItem
              title="مجموعه اسانس‌های گیاهی"
              imageSrc={`/samples/sample-product-${i%2?"1.jpg":"2.png"}`}
              discountedPrice="۱۸۰,۰۰۰ تومان"
              price="۱۵۰,۰۰۰ تومان"
              variant={"card"}
              imageWidth={300}
              imageHeight={300}
              className="min-w-42"
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
        <SectionContent variant="scroll">
          <ProductItem
            title="مجموعه اسانس‌های گیاهی"
            imageSrc="/samples/sample-story-4.jpg"
            discountedPrice="۱۸۰,۰۰۰ تومان"
            price="۱۵۰,۰۰۰ تومان"
          />

          <ProductItem
            title="مجموعه اسانس‌های گیاهی"
            imageSrc="/samples/sample-story-2.jpg"
            discountedPrice="۱۸۰,۰۰۰ تومان"
            price="۱۵۰,۰۰۰ تومان"
          />
        </SectionContent>
      </ProductSection>
      <Banner
        onClick={() => {}}
        containerCalassName="bg-linear-to-r from-[#48B6ED] to-[#4BC1FD] w-[326px] h-[100px]"
      />
      <ProductSection>
        <ProductSectionHeader
          title="پنل سازمانی"
          description=" دسترسی به پنل سازمانی خود پیدا کنید"
          link="/products"
          titleVariant={"default"}
          linkVariant={"default"}
        />
        <SectionContent variant="scroll">
          <ProductItem
            title="مجموعه اسانس‌های گیاهی"
            imageSrc="/samples/sample-story-4.jpg"
            discountedPrice="۱۸۰,۰۰۰ تومان"
            price="۱۵۰,۰۰۰ تومان"
          />

          <ProductItem
            title="مجموعه اسانس‌های گیاهی"
            imageSrc="/samples/sample-story-2.jpg"
            discountedPrice="۱۸۰,۰۰۰ تومان"
            price="۱۵۰,۰۰۰ تومان"
          />
        </SectionContent>
      </ProductSection>
      <SectionContent variant="scroll">
        <CountdownBanner seconds={365} />
        <ProductItem
          title="مجموعه اسانس‌های گیاهی"
          imageSrc="/samples/sample-product-3.jpg"
          price="۱۵۰,۰۰۰ تومان"
          discountPercent="۱ ساعت"
          badgeVariant={"special"}
        />

        <ProductItem
          title="مجموعه اسانس‌های گیاهی"
          imageSrc="/samples/sample-product-4.jpg"
          price="۱۵۰,۰۰۰ تومان"
          discountPercent="۱ ساعت"
          badgeVariant={"special"}
        />
      </SectionContent>
      <h2 className="font-medium text-2xl">فروشگاه های معروف</h2>
      <SectionContent variant="scroll">
        <StoreCard
          className="min-w-72"
          badge={
            <div className="flex-center size-14 rounded-full border-4 border-background bg-white shadow-lg">
              <div className="bg-black rounded-lg size-10 text-white flex-center text-2xl">
                V
              </div>
            </div>
          }
        >
          <StoreCardImage src="/samples/sample-store.png" alt="خانه گلد" />

          <StoreCardContent>
            <StoreCardTitle>خانه کادو</StoreCardTitle>

            <StoreCardRating rating={4.9} reviews="1.2 هزار" />

            <StoreCardAction>
              <Button size="sm" variant="gradient">
                مشاهده
              </Button>
            </StoreCardAction>
          </StoreCardContent>
        </StoreCard>
        <StoreCard
          className="min-w-72"
          badge={
            <div className="flex-center size-14 rounded-full border-4 border-background bg-white shadow-lg">
              <div className="bg-black rounded-lg size-10 text-white flex-center text-2xl">
                V
              </div>
            </div>
          }
        >
          <StoreCardImage src="/samples/sample-store.png" alt="خانه گلد" />

          <StoreCardContent className="pt-6">
            <StoreCardTitle>زیبا جو</StoreCardTitle>

            <StoreCardRating rating={4.9} reviews="1.2 هزار" />

            <StoreCardAction>
              <Button size="sm" variant="gradient">
                مشاهده
              </Button>
            </StoreCardAction>
          </StoreCardContent>
        </StoreCard>
      </SectionContent>
      <ProductSection>
        <ProductSectionHeader
          title="دسته بند های محبوب"
          link="/categories"
          linkVariant={"primary"}
          variant={"centered"}
        />
        <SectionContent variant={"scroll"}>
          <CategoryBanner
            imageSrc="/samples/sample-category-2.png"
            title="هدیه های لوکس"
            onClick={() => {}}
          />
          <CategoryBanner
            imageSrc="/samples/sample-category-3.png"
            title="زیور آلات ترند"
            onClick={() => {}}
          />
        </SectionContent>
      </ProductSection>
    </div>
  );
};

export default HomePage;
