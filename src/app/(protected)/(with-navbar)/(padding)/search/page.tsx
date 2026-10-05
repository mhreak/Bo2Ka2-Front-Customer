"use client";

import productsApi from "@/api/services/ApiService/productsApi";
import { ProductItem } from "@/components/product/ProductItem";
import SearchInput from "@/components/shared/inputs/SearchInput";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useApi } from "@/hooks/useApi";
import { APIGetTemplate } from "@/types/api/commonApiTypes";
import {
  Product,
  ProductParams,
} from "@/types/api/endpointTypes/product.types";
import { Menu, SlidersHorizontal } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const categories = [
  {
    id: 1,
    name: "همه",
    value: "all",
  },
  {
    id: 2,
    name: "جدید ترین ها",
    value: "Newest",
  },
  {
    id: 3,
    name: "پر فروش ترین ها",
    value: "BestSelling",
  },
  {
    id: 4,
    name: "ارزان ترین ها",
    value: "PriceAsc",
  },
  {
    id: 5,
    name: "پرتخفیف ترین ها",
    value: "MostDiscounted",
  },
];

const SearchPage = () => {
  const [activeTab, setActiveTab] = useState("all");

  const {
    data: productsData,
    isLoading: productsLoading,
    execute: getProducts,
  } = useApi<APIGetTemplate<Product[]>, ProductParams>(productsApi.getAll);

  useEffect(() => {
    const productParams: ProductParams | undefined =
      activeTab === "all"
        ? undefined
        : ({ SortBy: activeTab } as ProductParams);
    getProducts(productParams);
  }, [activeTab]);

  return (
    <>
      <div className="flex-between mb-5 lg:hidden">
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
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList variant={"accent"}>
          {categories.map((category) => (
            <TabsTrigger key={category.id} value={category.value}>
              {category.name}
            </TabsTrigger>
          ))}
        </TabsList>
        {categories.map((category) => (
          <TabsContent
            key={category.id}
            value={category.value}
            className={"animate-none"}
          >
            <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {productsLoading
                ? Array.from({ length: 15 }).map((_, i) => (
                    <Skeleton
                      key={i + 1}
                      className="rounded-2xl min-w-52 h-52 lg:min-w-0"
                    />
                  ))
                : productsData?.data.map((product, i) => (
                    <ProductItem
                      key={product.id}
                      productId={product.id}
                      title={product.name}
                      imageSrc={product.primaryImagePath || undefined}
                      discountedPrice={
                        product.discountPrice ? product.basePrice : undefined
                      }
                      price={
                        product.discountPrice
                          ? product.effectivePrice
                          : product.basePrice
                      }
                      discountPercent={product.discountPercent || undefined}
                      className="gap-2 items-start"
                      titleClassName="lg:text-lg"
                      variant={"animate"}
                      storeName={product.shopName}
                      badgeVariant={"default"}
                      onLike={() => {}}
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
