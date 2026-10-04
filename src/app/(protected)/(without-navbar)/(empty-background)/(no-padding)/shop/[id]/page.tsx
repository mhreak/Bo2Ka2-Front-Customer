"use client";

import shopsApi from "@/api/services/ApiService/shopsApi";
import { ProductItem } from "@/components/product/ProductItem";
import { SectionContent } from "@/components/SectionContent";
import BackButton from "@/components/shared/BackButton";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useApi } from "@/hooks/useApi";
import { APIGetTemplate } from "@/types/api/commonApiTypes";
import { ShopGet } from "@/types/api/endpointTypes/shop.types";
import { toPersianDigits } from "@/utils/numberConversions";
import { MoreVertical, Star } from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect } from "react";

// const shopMockData = {
//   name: "سیمین",
//   imageUrl: "/samples/sample-shop.png",
//   rating: 4.9,
//   address: "اصفهان نظر",
//   commentCount: 124,
//   description: `عرضه‌کننده‌ی ظرافت مدرن. مزون ولور
//                 قطعات استثنایی را گردآوری می‌کند که هنر بی‌زمان را با طراحی معاصر ترکیب می‌کنند.
//                 مجموعه‌های ما دارای مواد اولیه‌ی اخلاقی و زیبایی‌شناسی چشمگیر و با تضاد بالا هستند.`,
//   answer: "98%",
//   sale: "850+",
//   fallowers: "1.2k",
//   products: [
//     {
//       id: 1,
//       imagePath: "/samples/sample-product-6.jpg",
//       title: "پرالین های دست ساز",
//       price: 150000,
//       rating: 4.9,
//     },
//     {
//       id: 2,
//       imagePath: "/samples/sample-product-7.jpg",
//       title: "پرالین های دست ساز",
//       price: 150000,
//       rating: 4.9,
//     },
//     {
//       id: 3,
//       imagePath: "/samples/sample-product-8.jpg",
//       title: "پرالین های دست ساز",
//       price: 150000,
//       rating: 4.9,
//     },
//     {
//       id: 4,
//       imagePath: "/samples/sample-product-9.jpg",
//       title: "پرالین های دست ساز",
//       price: 150000,
//       rating: 4.9,
//     },
//   ],
// };

export default function ShopPage() {
  const params = useParams<{ id?: string }>();
  const shopId = params.id;

  const {
    data: shopData,
    isLoading,
    execute: getShop,
  } = useApi<APIGetTemplate<ShopGet>, { id: string }>(() =>
    shopsApi.get({ id: shopId }),
  );

  useEffect(() => {
    getShop();
  }, []);

  return (
    <div className="mx-auto w-full lg:max-w-7xl lg:px-8 lg:py-6">
      <div className="flex-between p-5 mb-3 lg:px-0">
        <BackButton />
        <MoreVertical />
      </div>
      <div className="relative w-full aspect-video mb-16 lg:aspect-21/9 lg:rounded-3xl ">
        <Image
          src={shopData?.data.coverPath || "/samples/sample-shop.png"} //TODO: replace with deafult shopcaver
          alt="shop-image"
          fill
          className="lg:rounded-3xl"
        />
        <div className="absolute bottom-0 translate-y-1/2 right-3 rounded-full size-30 bg-zinc-700 border-8 border-background flex-center">
          <div className="size-12 bg-stone-300 rounded-full flex-center text-2xl font-extralight text-tex">
            <div className="size-12 relative aspect-square rounded-full">
              <Image
                src={
                  shopData?.data.avatarPath || "/samples/sample-shop-avatar.png"
                } //TODO: replace with deafult shopcaver
                alt="shop-avatar"
                fill
                className="lg:rounded-3xl"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="p-5 lg:px-0 lg:grid lg:grid-cols-[1fr_18rem] lg:gap-10 lg:items-start">
        <div className="lg:col-start-1">
          <h3 className="font-bold text-xl mb-3">{shopData?.data.shopName}</h3>
          <div className="flex flex-row gap-3 items-center">
            {/* <span>{toPersianDigits(shopData?.data.rating)}</span> */}
            <Star className="text-[#B62417] size-4" fill="currentColor" />
            <p className="text-muted-foreground">
              {shopData?.data.textAddress}
            </p>
            {/* <p className="text-muted-foreground">{`(${toPersianDigits(shopData?.data.commentCount)} کامنت)`}</p> */}
          </div>
          <p className="text-muted-foreground leading-7 text-right mt-8 mb-10">
            {shopData?.data.returnPolicy}
          </p>
          <div className="flex flex-row items-center justify-evenly lg:mx-0 lg:justify-start lg:gap-16">
            <div className="flex flex-col items-center gap-3">
              {/* <span className="text-xl">{shopData?.data.answer}</span> */}
              <span className="text-muted-foreground text-lg">پاسخ</span>
            </div>
            <div className="h-0.5 w-11 bg-muted rotate-90 my-5" />

            <div className="flex flex-col items-center gap-3">
              {/* <span className="text-xl">{shopData?.data.sale}</span> */}
              <span className="text-muted-foreground text-lg">فروش</span>
            </div>
            <div className="h-0.5 w-11 bg-muted rotate-90 my-5" />
            <div className="flex flex-col items-center gap-3">
              {/* <span className="text-xl">{shopData?.data.fallowers}</span> */}
              <span className="text-muted-foreground text-lg">دنبال کننده</span>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center gap-3 w-full mt-5 mb-8 lg:col-start-2 lg:row-start-1 lg:mt-0 lg:flex-col lg:sticky lg:top-24">
          <Button variant={"outlineSecondary"} className={"w-1/2 lg:w-full"}>
            پیام
          </Button>
          <Button variant={"secondary"} className={"w-1/2 lg:w-full"}>
            دنبال کردن
          </Button>
        </div>
        <Tabs className={"mt-8 lg:col-span-2"}>
          <TabsList className={"w-full lg:justify-start"} variant={"secondary"}>
            <SectionContent className="h-10">
              <TabsTrigger value={"all"} className={"w-fit"}>
                {"همه"}
              </TabsTrigger>
              <TabsTrigger value={"most-sale"} className={"w-fit"}>
                {"پرفروش ترین"}
              </TabsTrigger>
              <TabsTrigger value={"newest"} className={"w-fit"}>
                {"جدید ترین محصولات"}
              </TabsTrigger>
              <TabsTrigger value={"newestr"} className={"w-fit"}>
                {"جدید ترین محصولات"}
              </TabsTrigger>
            </SectionContent>
          </TabsList>
          <TabsContent value={"all"}>
            <div className="grid grid-cols-2 gap-5 min-h-180 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {/* {shopData?.data.products.map((product) => (
                <ProductItem
                  imageSrc={product.imagePath}
                  title={product.title}
                  price={product.price}
                  rating={product.rating.toString()}
                  className="items-start"
                  ratingClassName="mt-5"
                ></ProductItem>
              ))} */}
            </div>
          </TabsContent>
          <TabsContent value={"most-sale"}>
            <div className="grid grid-cols-2 gap-5 min-h-180 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {/* {shopData?.data.products.map((product) => (
                <ProductItem
                  imageSrc={product.imagePath}
                  title={product.title}
                  price={product.price}
                  rating={product.rating.toString()}
                  className="items-start"
                  ratingClassName="mt-5"
                ></ProductItem>
              ))} */}
            </div>
          </TabsContent>
          <TabsContent value={"newest"}>
            <div className="grid grid-cols-2 gap-5 min-h-180 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {/* {shopData?.data.products.map((product) => (
                <ProductItem
                  imageSrc={product.imagePath}
                  title={product.title}
                  price={product.price}
                  rating={product.rating.toString()}
                  className="items-start"
                  ratingClassName="mt-5"
                ></ProductItem>
              ))} */}
            </div>
          </TabsContent>
          <TabsContent value={"newestr"}>
            <div className="grid grid-cols-2 gap-5 min-h-180 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {/* {shopData?.data.products.map((product) => (
                <ProductItem
                  imageSrc={product.imagePath}
                  title={product.title}
                  price={product.price}
                  rating={product.rating.toString()}
                  className="items-start"
                  ratingClassName="mt-5"
                ></ProductItem>
              ))} */}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
