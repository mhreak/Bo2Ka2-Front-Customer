import React, { useEffect } from "react";
import { ProductSection } from "./product/ProductSection";
import {
  ProductSectionHeader,
  ProductSectionHeaderProps,
} from "./product/ProductSectionHeader";
import { SectionContent } from "./SectionContent";
import { ProductItem } from "./product/ProductItem";
import {
  Product,
  ProductParams,
} from "@/types/api/endpointTypes/product.types";
import productsApi from "@/api/services/ApiService/productsApi";
import { APIGetTemplate } from "@/types/api/commonApiTypes";
import { useApi } from "@/hooks/useApi";
import { ProductSortENUM } from "@/types/api/enum.types";
import { Skeleton } from "./ui/skeleton";

export interface RenderProductSectionProps {
  productHeaderProps?: ProductSectionHeaderProps;
  productSort?: ProductSortENUM;
}

export default function RenderProductSection({
  productHeaderProps,
  productSort,
}: RenderProductSectionProps) {
  const {
    data: productsData,
    isLoading: productsLoading,
    execute: getProducts,
  } = useApi<APIGetTemplate<Product[]>, ProductParams>(productsApi.getAll);

  useEffect(() => {
    if (productSort) {
      getProducts({ SortBy: productSort });
    } else {
      getProducts();
    }
  }, []);

  if (productsLoading)
    return (
      <div>
        <ProductSectionHeader
          {...productHeaderProps}
          link={`/search?sort=${productSort}`}
          titleVariant={"default"}
          linkVariant={"default"}
          className="items-center"
        />
        <SectionContent
          variant={"scroll"}
          className="flex items-center gap-5 w-full h-70"
        >
          {Array.from({ length: 4 }).map((_, i) => (
            <div>
              <Skeleton key={i + 2} className="rounded-2xl size-60 w-70" />
            </div>
          ))}
        </SectionContent>
      </div>
    );

  return (
    <ProductSection>
      <ProductSectionHeader
        {...productHeaderProps}
        link={`/search?sort=${productSort}`}
        titleVariant={"default"}
        linkVariant={"default"}
        className="items-center"
      />
      <SectionContent
        variant="scroll"
        className="lg:grid lg:grid-cols-4 lg:gap-4 lg:overflow-visible"
      >
        {productsData?.data.slice(0, 4).map((product) => (
          <ProductItem
            key={product.id}
            productId={product.id}
            title={product.name}
            imageSrc={product.primaryImagePath || undefined}
            discountedPrice={
              product.discountPrice ? product.basePrice : undefined
            }
            price={
              product.discountPrice ? product.effectivePrice : product.basePrice
            }
            discountPercent={product.discountPercent || undefined}
            variant={"animate"}
            storeName={product.shopName}
            className="min-w-48 lg:w-full lg:min-w-0"
            badgeVariant={"default"}
          />
        ))}
      </SectionContent>
    </ProductSection>
  );
}
