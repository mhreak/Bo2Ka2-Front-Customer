import bannersApi from "@/api/services/ApiService/bannersApi";
import { useApi } from "@/hooks/useApi";
import { APIGetTemplate } from "@/types/api/commonApiTypes";
import { type Banner } from "@/types/api/endpointTypes/banner.types";
import React, { useEffect } from "react";
import BannerComponent from "./shared/Banner";
import { Skeleton } from "./ui/skeleton";
import HomeBannerCarousel, { BannerItem } from "./HomeBannerCarousel";

export default function BannersSection() {
  const {
    data: bannersData,
    isLoading: bannersLoading,
    execute: getbanners,
  } = useApi<APIGetTemplate<Banner[]>>(bannersApi.get);

  useEffect(() => {
    getbanners();
  }, []);

  const banners: BannerItem[] =
    bannersData?.data.map((b) => ({
      id: b.id,
      title: b.title,
      description: b.description,
      image: b.imagePath,
    })) ?? [];

  if (bannersLoading)
    return (
      <div className="space-y-8">
        {Array.from({ length: 2 }).map((_, i) => (
          <Skeleton
            key={i + 1}
            className="rounded-4xl w-full h-47 lg:w-full lg:h-64"
          />
        ))}
      </div>
    );

  return (
    <div className="space-y-8">
      {/* {bannersData?.data
        .filter((b) => b.isActive)
        .map((banner) => (
          <BannerComponent
            key={banner.id}
            onClick={() => {}}
            imageSrc={banner.imagePath || undefined}
            description={banner.description}
            title={banner.title}
            containerCalassName="bg-gradient"
          />
        ))} */}
      <HomeBannerCarousel banners={banners} autoplayDelay={5000} />
    </div>
  );
}
