"use client";

import { SectionContent } from "@/components/SectionContent";
import React, { useEffect } from "react";
import { StoreCard } from "./StoreCard";
import { StoreCardImage } from "./StoreCardImage";
import { StoreCardContent } from "./StoreCardContent";
import { StoreCardTitle } from "./StoreCardTitle";
import { StoreCardRating } from "./StoreCardRating";
import { StoreCardAction } from "./StoreCardAction";

import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";
import { Shop, ShopParams } from "@/types/api/endpointTypes/shop.types";
import { useApi } from "@/hooks/useApi";
import { APIGetTemplate } from "@/types/api/commonApiTypes";
import shopsApi from "@/api/services/ApiService/shopsApi";

export interface RenderShopSectionProps {
  title?: string;
}

export default function RenderShopSection({ title }: RenderShopSectionProps) {
  const isMobile = useIsMobile();

  const {
    data: shopsData,
    isLoading: shopsLoading,
    execute: getShops,
  } = useApi<APIGetTemplate<Shop[]>, ShopParams>(shopsApi.getAll);

  useEffect(() => {
    getShops();
  }, []);

  return (
    <div>
      {title && <h2 className="font-medium text-2xl mb-5">{title}</h2>}
      <SectionContent
        variant="scroll"
        className="lg:grid lg:grid-cols-3 lg:gap-4 lg:overflow-visible"
      >
        {shopsData?.data.map((shop) => (
          <>
            <StoreCard
              className="min-w-72 lg:w-full lg:min-w-0"
              badge={
                <div className="flex-center size-14 rounded-full border-4 border-background bg-white shadow-lg">
                  <div className="bg-black rounded-lg size-10 text-white flex-center text-2xl">
                    V
                  </div>
                </div>
              }
            >
              <StoreCardImage
                src={shop.coverPath || "/samples/sample-store.png"}
                alt={shop.shopName}
              />

              <StoreCardContent>
                <StoreCardTitle>{shop.shopName}</StoreCardTitle>

                <StoreCardRating rating={4.9} reviews="1.2 هزار" />

                <StoreCardAction>
                  <Button size={isMobile ? "sm" : "default"} variant="gradient">
                    مشاهده
                  </Button>
                </StoreCardAction>
              </StoreCardContent>
            </StoreCard>
          </>
        ))}
      </SectionContent>
    </div>
  );
}
