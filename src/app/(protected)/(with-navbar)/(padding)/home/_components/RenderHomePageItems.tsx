"use client";

import settingsApi from "@/api/services/ApiService/settingsApi";
import BannersSection from "@/components/BannersSection";
import { useApi } from "@/hooks/useApi";
import { APIGetTemplate } from "@/types/api/commonApiTypes";
import {
  HomepageSection,
  SectionType,
  Setting,
} from "@/types/api/endpointTypes/setting.types";
import React, { useEffect } from "react";
import Stories from "./Stories";
import Categories from "./Categories";
import RenderProductSection from "@/components/RenderProductSection";
import { ProductSortENUM } from "@/types/api/enum.types";
import { Skeleton } from "@/components/ui/skeleton";
import ProductSectionSkeleton from "@/components/product/ProductSectionSkeleton";
import RenderShopSection from "./store/RenderShopSection";

export default function RenderHomePageItems() {
  const {
    data: settingData,
    isLoading: settingsLoading,
    execute: getSettings,
  } = useApi<APIGetTemplate<Setting>, { key: string }>(settingsApi.get);

  useEffect(() => {
    getSettings({ key: "homepage" });
  }, []);

  const convertToProductSort = (sectionType: SectionType): ProductSortENUM => {
    switch (sectionType) {
      case "bestSellers":
        return "BestSelling";

      case "newest":
        return "Newest";

      default:
        return "Newest";
    }
  };

  const renderItems = (section: HomepageSection): React.ReactNode => {
    switch (section.type) {
      case "banner":
        return <BannersSection />;

      case "stories":
        return <Stories />;

      case "categories":
        return <Categories />;

      case "bestSellers":
      case "newest":
        return (
          <RenderProductSection
            productHeaderProps={{ title: section.title || undefined }}
            productSort={convertToProductSort(section.type)}
          />
        );

      case "trustedShops":
        return <RenderShopSection title={section.title || undefined} />;
      case "souvenirs":
        return null;

      default:
        return null;
    }
  };

  if (settingsLoading)
    return (
      <div className="space-y-8">
        <div className="flex items-center justify-start gap-4 lg:justify-center overflow-x-auto hide-scrollbar show-scrollbar">
          {Array.from({ length: 8 }).map((_, i) => (
            <Skeleton
              key={i + 1}
              className="size-20 rounded-full min-w-20 lg:min-w-0"
            />
          ))}
        </div>
        {Array.from({ length: 1 }).map((_, i) => (
          <Skeleton
            key={i + 2}
            className="rounded-4xl w-full h-47 lg:w-full lg:h-64"
          />
        ))}
        <ProductSectionSkeleton />
      </div>
    );

  return (
    <div className="space-y-8">
      {settingData?.data.value.sections.map((section) => renderItems(section))}
    </div>
  );
}
