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
import { Menu } from "lucide-react";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { SectionContent } from "@/components/SectionContent";
import { useCartStore } from "@/stores/cart/cart.store";
import { cn } from "@/lib/utils";

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
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();

  const productsListRef = useRef<HTMLDivElement>(null);
  const productRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const { addItem, setQuantity, removeItem, getProductQuantity } = useCartStore(
    (state) => state,
  );

  /*
   * -----------------------------------------
   * URL STATE
   * -----------------------------------------
   */

  const sortParam = params.get("sort");
  const pageParam = params.get("page");
  const pageSizeParam = params.get("pageSize");

  const activeTab: CategoryValue =
    sortParam && isCategoryValue(sortParam) ? sortParam : "all";

  const page = Math.max(1, Number(pageParam ?? "1"));

  const pageSize = Math.max(1, Number(pageSizeParam ?? "20"));

  /*
   * -----------------------------------------
   * SEARCH
   * -----------------------------------------
   */

  const [searchValue, setSearchValue] = useState("");

  const [debouncedSearchValue, setDebouncedSearchValue] = useState("");

  /*
   * -----------------------------------------
   * RESTORE SEARCH VALUE
   * -----------------------------------------
   */

  useEffect(() => {
    const savedSearch = sessionStorage.getItem("products-search-value");

    if (savedSearch !== null) {
      setSearchValue(savedSearch);
      setDebouncedSearchValue(savedSearch);
    }
  }, []);

  /*
   * -----------------------------------------
   * API
   * -----------------------------------------
   */

  const {
    data: productsData,
    isLoading: productsLoading,
    execute: getProducts,
  } = useApi<APIGetTemplate<Product[]>, ProductParams>(productsApi.getAll);

  /*
   * -----------------------------------------
   * BUILD PARAMS
   * -----------------------------------------
   */

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

  /*
   * -----------------------------------------
   * FETCH PRODUCTS
   * -----------------------------------------
   */

  useEffect(() => {
    getProducts(buildProductParams());
  }, [activeTab, page, pageSize, debouncedSearchValue]);

  /*
   * -----------------------------------------
   * UPDATE URL
   * -----------------------------------------
   */

  const updateUrl = useCallback(
    (values: {
      sort?: CategoryValue;
      page?: number;
      pageSize?: number;
      search?: string;
    }) => {
      const nextParams = new URLSearchParams(params.toString());

      if (values.sort !== undefined) {
        if (values.sort === "all") {
          nextParams.delete("sort");
        } else {
          nextParams.set("sort", values.sort);
        }
      }

      if (values.page !== undefined) {
        nextParams.set("page", String(values.page));
      }

      if (values.pageSize !== undefined) {
        nextParams.set("pageSize", String(values.pageSize));
      }

      if (values.search !== undefined) {
        if (values.search.trim()) {
          nextParams.set("search", values.search.trim());
        } else {
          nextParams.delete("search");
        }

        // با تغییر سرچ همیشه برو صفحه 1
        nextParams.set("page", "1");
      }

      router.push(`${pathname}?${nextParams.toString()}`, {
        scroll: false,
      });
    },
    [params, pathname, router],
  );

  /*
   * -----------------------------------------
   * DEBOUNCE SEARCH
   * -----------------------------------------
   */

  useEffect(() => {
    const timer = setTimeout(() => {
      const value = searchValue.trim();

      setDebouncedSearchValue(value);
      sessionStorage.setItem("products-search-value", value);

      updateUrl({
        search: value,
      });
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [searchValue]);

  /*
   * -----------------------------------------
   * TAB CHANGE
   * -----------------------------------------
   */

  const handleTabChange = (value: string) => {
    if (!isCategoryValue(value)) return;

    updateUrl({
      sort: value,
      page: 1,
    });

    /*
     * چون یک لیست کاملاً جدید داریم،
     * scroll قبلی نباید restore شود.
     */
    sessionStorage.removeItem(getScrollStorageKey());
  };

  /*
   * -----------------------------------------
   * PAGE CHANGE
   * -----------------------------------------
   */

  const handlePageChanged = (newPage: number) => {
    updateUrl({
      page: newPage,
    });

    requestAnimationFrame(() => {
      productsListRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  };

  /*
   * -----------------------------------------
   * PAGE SIZE CHANGE
   * -----------------------------------------
   */

  const handlePageSizeChanged = (newPageSize: number) => {
    updateUrl({
      page: 1,
      pageSize: newPageSize,
    });

    requestAnimationFrame(() => {
      productsListRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  };

  /*
   * -----------------------------------------
   * SCROLL STORAGE KEY
   * -----------------------------------------
   */

  function getScrollStorageKey() {
    return `products-scroll:${pathname}?${params.toString()}`;
  }

  /*
   * -----------------------------------------
   * SAVE SCROLL
   * -----------------------------------------
   */

  useEffect(() => {
    const handleScroll = () => {
      sessionStorage.setItem(
        getScrollStorageKey(),
        String(productsListRef.current?.scrollHeight),
      );
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname, params]);

  /*
   * -----------------------------------------
   * RESTORE SCROLL
   * -----------------------------------------
   */

  useEffect(() => {
    if (productsLoading) return;

    const productId = sessionStorage.getItem("last-viewed-product");

    if (!productId) return;

    const productElement = productRefs.current[productId];

    if (!productElement) return;

    requestAnimationFrame(() => {
      productElement.scrollIntoView({
        behavior: "instant",
        block: "center",
      });

      sessionStorage.removeItem("last-viewed-product");
    });
  }, [productsLoading, productsData]);

  /*
   * -----------------------------------------
   * RENDER
   * -----------------------------------------
   */

  return (
    <div
      ref={productsListRef}
      className="flex h-full min-h-0 flex-col overflow-hidden"
    >
      <div className="flex-between mb-5 lg:hidden">
        <Menu />

        <Image
          src="/images/bodokado-logo.png"
          width={62}
          height={62}
          alt="bodokado-logo"
        />
      </div>

      <div className="mb-5 flex flex-row items-center gap-5">
        <SearchInput
          value={searchValue}
          onChange={setSearchValue}
          className="flex-1 bg-background shadow"
          placeholder="جستجو"
          onClear={() => {
            setSearchValue("");
            setDebouncedSearchValue("");

            sessionStorage.removeItem("products-search-value");
          }}
        />
      </div>

      <Tabs
        value={activeTab}
        onValueChange={handleTabChange}
        className="flex h-full flex-col"
      >
        <SectionContent variant="scroll">
          <TabsList variant="accent">
            {categories.map((category) => (
              <TabsTrigger key={category.id} value={category.value}>
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>
        </SectionContent>

        <TabsContent value={activeTab} className="flex min-h-0 flex-1 flex-col">
          <div
            className={cn(
              "grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5",
              productsData?.data.length === 0 &&
                "flex-1 grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 h-full",
            )}
          >
            {productsLoading ? (
              Array.from({ length: 15 }).map((_, i) => (
                <Skeleton
                  key={i + 1}
                  className="h-52 min-w-52 rounded-2xl lg:min-w-0"
                />
              ))
            ) : productsData?.data && productsData.data.length > 0 ? (
              productsData?.data.map((product, i) => (
                <ProductItem
                  key={product.id}
                  ref={(el) => {
                    productRefs.current[product.id] = el;
                  }}
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
                  className="items-start gap-2"
                  titleClassName="lg:text-lg"
                  variant="animate"
                  storeName={product.shopName}
                  badgeVariant="default"
                  onLike={() => {}}
                  style={{
                    animationDelay: `${(i + 4) * 50}ms`,
                  }}
                  onAddtoCart={() => {
                    addItem(product, 1);
                  }}
                  onChangeQuantity={(val) => {
                    setQuantity(product.id, val);
                  }}
                  onRemoveFromCart={() => {
                    removeItem(product.id);
                  }}
                  quantity={getProductQuantity(product.id)}
                />
              ))
            ) : (
              <div className="flex flex-1 items-center justify-center text-2xl text-muted-foreground">
                محصولی یافت نشد!
              </div>
            )}
          </div>

          <AppPagination
            paginationMeta={productsData?.meta}
            onPageChanged={handlePageChanged}
            onPageSizeChanged={handlePageSizeChanged}
            showPageSizeSelector
            siblingCount={1}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SearchPage;
