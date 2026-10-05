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
  return (
    <ProductSection>
      <ProductSectionHeader
        {...productHeaderProps}
        link="/search"
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
