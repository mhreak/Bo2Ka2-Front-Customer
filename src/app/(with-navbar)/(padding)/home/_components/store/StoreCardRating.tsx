import * as React from "react";
import { Star } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const storeCardRatingVariants = cva(
  "flex items-center gap-1 text-muted-foreground",
  {
    variants: {
      variant: {
        default: "text-sm",
        compact: "text-xs",
        large: "text-base",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const starVariants = cva("", {
  variants: {
    variant: {
      default: "size-4 fill-yellow-400 text-yellow-400",
      small: "size-3 fill-yellow-400 text-yellow-400",
      large: "size-5 fill-yellow-400 text-yellow-400",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface StoreCardRatingProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof storeCardRatingVariants> {
  rating: number | string;
  reviews?: number | string;

  starVariant?: VariantProps<typeof starVariants>["variant"];

  starClassName?: string;
}

const StoreCardRating = React.forwardRef<
  HTMLDivElement,
  StoreCardRatingProps
>(
  (
    {
      className,
      variant,
      rating,
      reviews,
      starVariant,
      starClassName,
      ...props
    },
    ref
  ) => (
    <div
      ref={ref}
      className={cn(storeCardRatingVariants({ variant }), className)}
      {...props}
    >
      <Star
        className={cn(
          starVariants({ variant: starVariant }),
          starClassName
        )}
      />

      <span>{rating}</span>

      {reviews && (
        <>
          <span>·</span>
          <span>{reviews} کامنت</span>
        </>
      )}
    </div>
  )
);

StoreCardRating.displayName = "StoreCardRating";

export {
  StoreCardRating,
  storeCardRatingVariants,
  starVariants,
};