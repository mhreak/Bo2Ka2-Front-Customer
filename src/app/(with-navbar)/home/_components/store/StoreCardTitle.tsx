import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const storeCardTitleVariants = cva(
  "font-semibold leading-none tracking-tight",
  {
    variants: {
      variant: {
        default: "text-lg",
        sm: "text-base",
        lg: "text-xl",
        muted: "text-lg text-muted-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface StoreCardTitleProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof storeCardTitleVariants> {}

const StoreCardTitle = React.forwardRef<
  HTMLHeadingElement,
  StoreCardTitleProps
>(({ className, variant, ...props }, ref) => {
  return (
    <h3
      ref={ref}
      className={cn(storeCardTitleVariants({ variant }), className)}
      {...props}
    />
  );
});

StoreCardTitle.displayName = "StoreCardTitle";

export {
  StoreCardTitle,
  storeCardTitleVariants,
};