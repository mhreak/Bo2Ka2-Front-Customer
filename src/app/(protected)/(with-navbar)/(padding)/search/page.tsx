"use client";

import productsApi from "@/api/services/ApiService/productsApi";
import { ProductItem } from "@/components/product/ProductItem";
import AppPagination from "@/components/shared/AppPagination";
import SearchInput from "@/components/shared/inputs/SearchInput";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useApi } from "@/hooks/useApi";
import { APIGetTemplate } from "@/types/api/commonApiTypes";
import {
  Product,
  ProductParams,
} from "@/types/api/endpointTypes/product.types";
import { ProductSortENUM } from "@/types/api/enum.types";
import { Menu, SlidersHorizontal } from "lucide-react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";

type CategoryValue = ProductSortENUM | "all";

interface Category {
  id: number;
  name: string;
  value: CategoryValue;
}

const categories: Category[] = [
  { id: 1, name: "همه", value: "all" },
  { id: 2, name: "جدید ترین ها", value: "Newest" },
  { id: 3, name: "پر فروش ترین ها", value: "BestSelling" },
  { id: 4, name: "ارزان ترین ها", value: "PriceAsc" },
  { id: 5, name: "پرتخفیف ترین ها", value: "MostDiscounted" },
];

const isCategoryValue = (value: string): value is CategoryValue => {
  return categories.some((category) => category.value === value);
};

const SearchPage = () => {
  const [activeTab, setActiveTab] = useState<CategoryValue>("all");
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(20);
  const [searchValue, setSearchValue] = useState<string>("");
  const [debouncedSearchValue, setDebouncedSearchValue] = useState("");

  const productsListRef = useRef<HTMLDivElement>(null);

  const params = useSearchParams();
  const sort = params.get("sort");

  useEffect(() => {
    if (sort && isCategoryValue(sort)) {
      setActiveTab(sort);
    }
  }, [sort]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchValue(searchValue.trim());
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [searchValue]);

  useEffect(() => {
    setPage(1);
  }, [debouncedSearchValue]);

  const {
    data: productsData,
    isLoading: productsLoading,
    execute: getProducts,
  } = useApi<APIGetTemplate<Product[]>, ProductParams>(productsApi.getAll);

  // تابع کمکی برای ساخت پارامترها
  const buildProductParams = useCallback(
    (overrides?: Partial<ProductParams>): ProductParams => {
      const baseParams: ProductParams = {
        Page: page,
        PageSize: pageSize,

        ...(activeTab !== "all" && {
          SortBy: activeTab,
        }),

        ...(debouncedSearchValue && {
          Search: debouncedSearchValue,
        }),
      };

      return {
        ...baseParams,
        ...overrides,
      };
    },
    [page, pageSize, activeTab, debouncedSearchValue],
  );

  // دریافت محصولات با تغییر تب، صفحه یا تعداد ردیف
  useEffect(() => {
    getProducts(buildProductParams());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTab, page, pageSize, debouncedSearchValue]);

  const handleTabChange = (value: string) => {
    if (!isCategoryValue(value)) return;

    setActiveTab(value);
    setPage(1);
  };

  // تغییر صفحه
  const handlePageChanged = (newPage: number) => {
    setPage(newPage);

    requestAnimationFrame(() => {
      productsListRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  };

  // تغییر تعداد ردیف در هر صفحه → برگشت به صفحه اول
  const handlePageSizeChanged = (newPageSize: number) => {
    setPageSize(newPageSize);
    setPage(1);
    requestAnimationFrame(() => {
      productsListRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  };

  return (
    <div ref={productsListRef}>
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
          value={searchValue}
          onChange={setSearchValue}
          className="bg-background shadow flex-1"
          placeholder="جستجو"
          onClear={() => {
            setSearchValue("");
            setDebouncedSearchValue("");
          }}
        />
        {/* <SlidersHorizontal /> */}
      </div>
      <Tabs value={activeTab} onValueChange={handleTabChange}>
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
            <AppPagination
              paginationMeta={productsData?.meta}
              onPageChanged={handlePageChanged}
              onPageSizeChanged={handlePageSizeChanged}
              showPageSizeSelector={true}
              siblingCount={1}
            />
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default SearchPage;
