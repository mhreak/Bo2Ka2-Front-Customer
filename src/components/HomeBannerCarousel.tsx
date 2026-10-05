"use client";

import * as React from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

import { cn } from "@/lib/utils";
import { ENV } from "@/config/env";

export interface BannerItem {
  id: string | number;
  title?: string;
  description?: string;
  imagePath?: string;
  href?: string;
}

interface HomeBannerCarouselProps {
  banners: BannerItem[];
  autoplayDelay?: number;
  className?: string;
}

const HomeBannerCarousel = ({
  banners,
  autoplayDelay = 5000,
  className,
}: HomeBannerCarouselProps) => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  const autoplay = React.useRef(
    Autoplay({
      delay: autoplayDelay,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    }),
  );

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  if (!banners.length) {
    return null;
  }

  return (
    <div dir="rtl" className={cn("relative w-full", className)}>
      <Carousel
        setApi={setApi}
        opts={{
          direction: "rtl",
          loop: true,
          align: "start",
        }}
        plugins={[autoplay.current]}
        className="w-full"
      >
        <CarouselContent className="ml-0">
          {banners.map((banner) => (
            <CarouselItem key={banner.id} className="pl-0">
              <BannerSlide banner={banner} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Indicators */}
      {banners.length > 1 && (
        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-1.5">
          {banners.map((banner, index) => (
            <button
              key={banner.id}
              type="button"
              onClick={() => api?.scrollTo(index)}
              aria-label={`رفتن به بنر ${index + 1}`}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                index === current
                  ? "w-6 bg-primary-lighter"
                  : "w-1.5 bg-primary-lighter/40 hover:bg-primary-lighter/60 hover:cursor-pointer",
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
};

interface BannerSlideProps {
  banner: BannerItem;
}

const BannerSlide = ({ banner }: BannerSlideProps) => {
  const content = (
    <div
      className={cn(
        "relative aspect-16/6 w-full",
        "overflow-hidden rounded-2xl",
        "bg-muted",
      )}
    >
      <Image
        src={
          banner.imagePath
            ? `${ENV.API_BASE_URL}/${banner.imagePath}`
            : "/images/default-white-image.avif"
        }
        alt={banner.title ?? "بنر"}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {(banner.title || banner.description) && (
        <div
          className={cn(
            "absolute inset-0",
            "flex items-end",
            "bg-linear-to-t",
            "from-black/60 via-black/20 to-transparent",
            !banner.imagePath &&
              "from-primary via-primary-light to-transparent",
          )}
        >
          <div className="p-5 pb-8  text-white sm:p-8">
            {banner.title && (
              <h2 className="text-lg font-bold sm:text-2xl">{banner.title}</h2>
            )}

            {banner.description && (
              <p className="mt-1 text-sm text-white/80 sm:text-base">
                {banner.description}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );

  if (banner.href) {
    return (
      <a
        href={banner.href}
        className="block outline-none"
        aria-label={banner.title}
      >
        {content}
      </a>
    );
  }

  return content;
};

export default HomeBannerCarousel;
