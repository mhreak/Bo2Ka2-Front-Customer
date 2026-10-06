"use client";

import CustomCarousel from "@/components/shared/CustomCarousel";
import { useParams } from "next/navigation";
import {
  AlarmClock,
  Clock,
  Heart,
  ShoppingCart,
  Star,
  Trash,
} from "lucide-react";
import SharedPageHeader from "@/components/shared/SharedPageHeader";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProductSectionHeader } from "@/components/product/ProductSectionHeader";
import CommentItem from "./_components/CommentItem";
import { useEffect, useState } from "react";
import { useApi } from "@/hooks/useApi";
import { APIGetTemplate } from "@/types/api/commonApiTypes";
import { Product, ProductGet } from "@/types/api/endpointTypes/product.types";
import productsApi from "@/api/services/ApiService/productsApi";
import { ENV } from "@/config/env";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/stores/cart/cart.store";
import Quantity from "@/components/shared/Quantity";
import { CartItem } from "@/stores/cart/cart.types";

export function mapProductToCartItem(
  product: ProductGet,
  quantity: number = 1,
): CartItem {
  return {
    id: product.id,
    name: product.name,
    brand: product.brand,
    basePrice: product.basePrice,
    isDiscountEnabled: product.isDiscountEnabled,
    discountPrice: product.discountPrice,
    effectivePrice: product.effectivePrice,
    discountPercent: product.discountPercent,
    isInStock: product.isInStock,
    isSpecial: product.isSpecial,
    soldCount: product.soldCount,
    primaryImagePath: product.images.find((i) => i.isPrimary)?.path || null,
    productType: product.productType,
    shopId: product.shopId,
    shopName: product.shopName,
    createdAt: product.createdAt,
    quantity,
  };
}

// const productMockData = {
//   id: 1,
//   name: "چراغ رومیزی",
//   provider: "مزون ولور",
//   category: "منزل",
//   rating: 4.9,
//   reviewCount: "1.2K",
//   description:
//     "چراغی زیبا و مدرن با طراحی مینیمال که برای دکوراسیون منزل و ایجاد فضای گرم مناسب است.",
//   price: 150000,
//   originalPrice: 180000,
//   discount: 17,
//   specifications:
//     "ابعاد: 30x15x15 سانتی‌متر، وزن: 1.2 کیلوگرم، جنس: فلز و شیشه، رنگ: مشکی و طلایی، منبع تغذیه: برق شهری، نوع لامپ: LED، قابلیت تنظیم نور: دارد، طول کابل: 1.5 متر، گارانتی: 12 ماه",
//   transportation:
//     "ارسال رایگان به سراسر کشور، زمان تحویل: 3-5 روز کاری، امکان بازگشت کالا تا 7 روز پس از دریافت، شرایط بازگشت: کالا باید در بسته‌بندی اصلی و بدون استفاده باشد.",
//   colors: ["#C9B43A", "#1F1F1F", "#EEEEEE"],
//   suggestedText: "پیشنهاد در ساعت ۴:۲۲:۵۹ به پایان میرسد",
//   comments: [
//     {
//       id: 1,
//       username: "حدیث امیری",
//       role: "گردآورنده تایید شده",
//       comment: "خیلی زیبا و باکیفیته، از خریدش راضی هستم.",
//       rating: 5,
//     },
//     {
//       id: 2,
//       username: "سارا احمدی",
//       role: "گردآورنده تایید شده",
//       comment: "طراحی ساده و زیبایی داره.",
//       rating: 4,
//     },
//   ],
// };

export default function ProductItemPage() {
  const params = useParams<{ id: string }>();
  const id = params?.id;

  const { hasItem, getProductQuantity, setQuantity, addItem, removeItem } =
    useCartStore();

  const {
    data: productData,
    isLoading,
    execute: getProduct,
  } = useApi<APIGetTemplate<ProductGet>, { id: string }>(() =>
    productsApi.get({ id: id }),
  );

  useEffect(() => {
    getProduct();
  }, []);

  const [isLike, setIsLike] = useState(false);

  const handleLike = () => {
    setIsLike(!isLike);
  };

  return (
    <>
      <SharedPageHeader
        title=""
        actionButton={
          <Heart
            className="text-rose-500 transition-all duration-300"
            onClick={handleLike}
            fill={isLike ? "currentColor" : "var(--color-background)"}
          />
        }
        className="mb-0 p-5 lg:px-0"
      />
      <div className="flex flex-col lg:grid lg:grid-cols-2 lg:items-start lg:gap-10">
        <div className="mb-5 lg:sticky lg:top-24 lg:mb-0">
          <CustomCarousel
            imagePaths={
              productData?.data?.images && productData?.data?.images?.length > 0
                ? productData?.data.images.map(
                    (image) => `${ENV.API_BASE_URL}/${image.path}`,
                  )
                : ["/images/no-photo-image.png"]
            }
          />
        </div>
        <div className="p-5 mt-2 space-y-6 lg:px-0">
          <div className="flex-between">
            <span className="text-accent text-sm">
              {productData?.data.shopName}
            </span>
            {productData?.data.brand && (
              <Badge variant={"ghost"} className="text-md px-5 py-3">
                {`(${productData?.data.brand})`}

                {/* {productData?.data.rating} */}
                <Star className="text-accent size-5" fill="currentColor" />
              </Badge>
            )}
          </div>
          <h4 className="text-2xl font-semibold">{productData?.data.name}</h4>
          <div>
            <h3 className="text-3xl font-bold ">
              {productData?.data.effectivePrice.toLocaleString()} تومان
            </h3>
            {productData?.data.isDiscountEnabled && (
              <p className="text-lg text-muted-foreground line-through mb-2">
                {productData?.data.basePrice.toLocaleString()} تومان
              </p>
            )}
            <Badge variant={"primaryLight"}>
              <AlarmClock className="size-10" />
              {/* {productData?.data.suggestedText} */}
            </Badge>
            {productData?.data.isInStock === false && (
              <h4 className="mt-3 text-lg">{"اتمام موجودی"}</h4>
            )}
          </div>
          <div className="flex flex-row items-center gap-3">
            {/* {productData?.data.colors.map((color, index) => (
              <span
                className="rounded-full size-10 border border-muted-foreground"
                style={{ backgroundColor: color }}
              ></span>
            ))} */}
          </div>
          <div className="flex items-center justify-end w-full">
            {hasItem(productData?.data.id || "") ? (
              <div className="flex items-center gap-2">
                <Quantity
                  value={getProductQuantity(productData?.data.id || "")}
                  onChange={(val) => {
                    setQuantity(productData?.data.id || "", val);
                  }}
                />
                <Button
                  variant={"destructive"}
                  size={"icon"}
                  onClick={() => {
                    removeItem(productData?.data.id || "");
                  }}
                >
                  <Trash />
                </Button>
              </div>
            ) : (
              <Button
                variant={"gradient"}
                className={"w-fit"}
                onClick={() => {
                  if (productData?.data) {
                    addItem(mapProductToCartItem(productData?.data));
                  }
                }}
              >
                <ShoppingCart />
                افزودن به سبد خرید
              </Button>
            )}
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
                {productData?.data.description}
              </p>
            </TabsContent>
            <TabsContent value={"specifications"}>
              <p className="text-md text-muted-foreground">
                {/* {productData?.data.specifications} */}
              </p>
            </TabsContent>
            <TabsContent value={"transportation"}>
              <p className="text-md text-muted-foreground">
                {/* {productData?.data.transportation} */}
              </p>
            </TabsContent>
          </Tabs>
          <ProductSectionHeader
            title="نظرات متصدی"
            link="/comments/1"
            linkVariant={"primary"}
          />
          {/* {productData?.data.comments.map((c) => (
            <CommentItem
              key={c.id}
              auther={c.username}
              role={c.role}
              content={c.comment}
            />
          ))} */}
        </div>
      </div>
    </>
  );
}
