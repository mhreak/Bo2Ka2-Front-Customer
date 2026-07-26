import * as React from "react";
import Image from "next/image";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { Zap } from "lucide-react";

const productItemVariants = cva("relative flex flex-col", {
  variants: {
    variant: {
      default: "min-w-fit",
      bordered: "rounded-2xl border p-4",
      card: "rounded-2xl bg-card p-4 shadow-sm min-w-50",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const imageVariants = cva("rounded-2xl object-cover", {
  variants: {
    variant: {
      default: "",
      rounded: "rounded-3xl",
      square: "rounded-none",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const titleVariants = cva("mt-3 font-semibold", {
  variants: {
    variant: {
      default: "text-base text-accent-foreground",
      large: "text-lg text-accent-foreground",
      muted: "text-base text-muted-foreground",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const discountedPriceVariants = cva("", {
  variants: {
    variant: {
      default: "text-xs text-muted-foreground line-through",
      visible: "text-xs text-muted-foreground line-through",
      hidden: "hidden",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const priceVariants = cva("font-semibold", {
  variants: {
    variant: {
      default: "text-gradient",
      primary: "text-primary",
      accent: "text-accent",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const badgeVariants = cva(
  "absolute top-3 right-3 flex h-6 min-w-8 items-center justify-center rounded-md px-2 text-xs font-semibold",
  {
    variants: {
      variant: {
        default: "bg-destructive text-destructive-foreground",
        special: "bg-card",
        primary: "bg-primary text-primary-foreground",
        secondary: "bg-secondary text-secondary-foreground",
        gradient: "bg-gradient text-primary-foreground",
        outline: "border border-border bg-background",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface ProductItemProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof productItemVariants> {
  imageSrc: string;
  title: string;
  discountedPrice?: string;
  price: string;

  imageVariant?: VariantProps<typeof imageVariants>["variant"];
  titleVariant?: VariantProps<typeof titleVariants>["variant"];
  discountedPriceVariant?: VariantProps<
    typeof discountedPriceVariants
  >["variant"];
  priceVariant?: VariantProps<typeof priceVariants>["variant"];

  imageClassName?: string;
  titleClassName?: string;
  discountedPriceClassName?: string;
  priceClassName?: string;

  imageWidth?: number;
  imageHeight?: number;

  discountPercent?: string;
  badgeVariant?: VariantProps<typeof badgeVariants>["variant"];
  badgeClassName?: string;
}

const ProductItem = React.forwardRef<HTMLDivElement, ProductItemProps>(
  (
    {
      className,
      variant,

      imageSrc,
      title,
      discountedPrice,
      price,

      imageVariant,
      titleVariant,
      discountedPriceVariant,
      priceVariant,

      imageClassName,
      titleClassName,
      discountedPriceClassName,
      priceClassName,

      imageWidth = 155,
      imageHeight = 155,

      discountPercent,
      badgeVariant,
      badgeClassName,

      ...props
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={cn(productItemVariants({ variant }), className)}
        {...props}
      >
        <Image
          src={imageSrc}
          alt={title}
          width={imageWidth}
          height={imageHeight}
          className={cn(
            imageVariants({ variant: imageVariant }),
            imageClassName,
          )}
        />

        {discountPercent && (
          <span
            className={cn(
              badgeVariants({ variant: badgeVariant }),
              badgeClassName,
            )}
          >
            {badgeVariant === "special" && (
              <Zap className="text-emerald-500 ml-1" size={15} />
            )}
            {discountPercent}
          </span>
        )}

        <p
          className={cn(
            titleVariants({ variant: titleVariant }),
            titleClassName,
          )}
        >
          {title}
        </p>

        <div className="mt-1 flex items-center gap-2">
          {discountedPrice && (
            <span
              className={cn(
                discountedPriceVariants({
                  variant: discountedPriceVariant,
                }),
                discountedPriceClassName,
              )}
            >
              {discountedPrice}
            </span>
          )}

          <span
            className={cn(
              priceVariants({ variant: priceVariant }),
              priceClassName,
            )}
          >
            {price}
          </span>
        </div>
      </div>
    );
  },
);

ProductItem.displayName = "ProductItem";

export {
  ProductItem,
  productItemVariants,
  imageVariants,
  titleVariants,
  discountedPriceVariants,
  priceVariants,
  badgeVariants,
};
