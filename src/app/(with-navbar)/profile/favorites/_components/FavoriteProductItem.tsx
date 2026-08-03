"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { toPersianDigits } from "@/utils/numberConversions";
import { cva, VariantProps } from "class-variance-authority";
import { Heart } from "lucide-react";
import Image from "next/image";
import React from "react";

const favoriteProductItemVariants = cva(
  "flex items-center gap-4 rounded-xl border border-border p-4 mt-4 transition-colors relative",
  {
    variants: {
      variant: {
        default: "",
        compact: "gap-3 p-3",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface FavoriteProductItemProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof favoriteProductItemVariants> {
  imagePath: string;
  title: string;
  description?: string;
  price: number | string;
  onAddToCart: (id: number) => void;
  onLike: (val: boolean) => void;
}

const FavoriteProductItem = React.forwardRef<
  HTMLDivElement,
  FavoriteProductItemProps
>(
  (
    {
      className,
      variant,
      imagePath,
      title,
      description,
      price,
      onAddToCart,
      onLike,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={cn(favoriteProductItemVariants({ variant }), className)}
        {...props}
      >
        <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-lg">
          <Image src={imagePath} alt={title} fill className="object-cover" />
        </div>

        <div className="flex flex-1 flex-col justify-between">
          <div>
            <h3 className="font-bold text-xl">{title}</h3>
            {description && (
              <p className="mt-1 text-sm text-muted-foreground">
                {description}
              </p>
            )}
          </div>

          <div className="mt-4 flex items-center justify-between">
            <span className="font-bold text-lg text-foreground">
              {toPersianDigits(price.toLocaleString())} تومان
            </span>
            <Button variant={"secondary"} size={"sm"}>سبد خرید</Button>
          </div>
        </div>

        <Heart
          size={18}
          className="text-rose-700 transition-opacity hover:opacity-70 absolute top-4 left-4 size-7"
          fill="currentColor"
          onClick={() => onLike(false)}
        />
      </div>
    );
  },
);

FavoriteProductItem.displayName = "FavoriteProductItem";

export { FavoriteProductItem, favoriteProductItemVariants };
