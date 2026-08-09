"use client";

import CustomCarousel from "@/components/shared/CustomCarousel";
import { useParams } from "next/navigation";
import { AlarmClock, Clock, Heart, Star } from "lucide-react";
import SharedProfileHeader from "@/app/(with-navbar)/(padding)/profile/_components/SharedProfileHeader";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProductSectionHeader } from "@/components/product/ProductSectionHeader";
import CommentItem from "./_components/CommentItem";
import { useState } from "react";

const productMockData = {
  id: 1,
  name: "چراغ رومیزی",
  provider: "مزون ولور",
  category: "منزل",
  rating: 4.9,
  reviewCount: "1.2K",
  description:
    "چراغی زیبا و مدرن با طراحی مینیمال که برای دکوراسیون منزل و ایجاد فضای گرم مناسب است.",
  price: 150000,
  originalPrice: 180000,
  discount: 17,
  specifications:
    "ابعاد: 30x15x15 سانتی‌متر، وزن: 1.2 کیلوگرم، جنس: فلز و شیشه، رنگ: مشکی و طلایی، منبع تغذیه: برق شهری، نوع لامپ: LED، قابلیت تنظیم نور: دارد، طول کابل: 1.5 متر، گارانتی: 12 ماه",
  transportation:
    "ارسال رایگان به سراسر کشور، زمان تحویل: 3-5 روز کاری، امکان بازگشت کالا تا 7 روز پس از دریافت، شرایط بازگشت: کالا باید در بسته‌بندی اصلی و بدون استفاده باشد.",
  colors: ["#C9B43A", "#1F1F1F", "#EEEEEE"],
  suggestedText: "پیشنهاد در ساعت ۴:۲۲:۵۹ به پایان میرسد",
  comments: [
    {
      id: 1,
      username: "حدیث امیری",
      role: "گردآورنده تایید شده",
      comment: "خیلی زیبا و باکیفیته، از خریدش راضی هستم.",
      rating: 5,
    },
    {
      id: 2,
      username: "سارا احمدی",
      role: "گردآورنده تایید شده",
      comment: "طراحی ساده و زیبایی داره.",
      rating: 4,
    },
  ],
};

export default function ProductItemPage() {
  const params = useParams();
  const id = params?.id;

  const [isLike, setIsLike] = useState(false);

  const handleLike = () => {
    setIsLike(!isLike);
  };

  return (
    <>
      <SharedProfileHeader
        title=""
        actionButton={
          <Heart
            className="text-rose-500 transition-all duration-300"
            onClick={handleLike}
            fill={isLike ? "currentColor" : "var(--color-background)"}
          />
        }
        className="mb-0 p-5"
      />
      <div className="mb-5">
        <CustomCarousel
          imagePaths={[
            "/samples/sample-product-3.jpg",
            "/samples/sample-product-4.jpg",
            "/samples/sample-product-5.jpg",
            "/samples/sample-product-6.jpg",
          ]}
        />
      </div>
      <div className="p-5 mt-2 space-y-6">
        <div className="flex-between">
          <span className="text-accent text-sm">
            {productMockData.provider}
          </span>
          <Badge variant={"ghost"} className="text-md px-5 py-3">
            {`(${productMockData.reviewCount})`}
            {"  "}
            {productMockData.rating}
            <Star className="text-accent size-5" fill="currentColor" />
          </Badge>
        </div>
        <h4 className="text-2xl font-semibold">{productMockData.name}</h4>
        <div>
          <h3 className="text-3xl font-bold ">
            {productMockData.price.toLocaleString()} تومان
          </h3>
          <p className="text-lg text-muted-foreground line-through mb-2">
            {productMockData.originalPrice.toLocaleString()} تومان
          </p>
          <Badge variant={"primaryLight"}>
            <AlarmClock className="size-10" />
            {productMockData.suggestedText}
          </Badge>
          <h4 className="mt-3 text-lg">{"اتمام"}</h4>
        </div>
        <div className="flex flex-row items-center gap-3">
          {productMockData.colors.map((color, index) => (
            <span
              className="rounded-full size-10 border border-muted-foreground"
              style={{ backgroundColor: color }}
            ></span>
          ))}
        </div>
        <Tabs>
          <TabsList
            variant={"line"}
            className={"w-full border-b border-muted-foreground pb-0.5"}
          >
            <TabsTrigger value={"description"}>توضیحات</TabsTrigger>
            <TabsTrigger value={"specifications"}>مشخصات</TabsTrigger>
            <TabsTrigger value={"transportation"}>
              حمل و نقل و برگشت
            </TabsTrigger>
          </TabsList>
          <TabsContent value={"description"}>
            <p className="text-md text-muted-foreground">
              {productMockData.description}
            </p>
          </TabsContent>
          <TabsContent value={"specifications"}>
            <p className="text-md text-muted-foreground">
              {productMockData.specifications}
            </p>
          </TabsContent>
          <TabsContent value={"transportation"}>
            <p className="text-md text-muted-foreground">
              {productMockData.transportation}
            </p>
          </TabsContent>
        </Tabs>
        <ProductSectionHeader
          title="نظرات متصدی"
          link="/comments/1"
          linkVariant={"primary"}
        />
        {productMockData.comments.map((c) => (
          <CommentItem
            key={c.id}
            auther={c.username}
            role={c.role}
            content={c.comment}
          />
        ))}
      </div>
    </>
  );
}
