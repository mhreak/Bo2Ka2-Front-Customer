import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const storeCardContentVariants = cva("flex flex-col", {
  variants: {
    variant: {
      default: "gap-3 p-4",
      compact: "gap-2 p-3",
      spacious: "gap-5 p-6",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface StoreCardContentProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof storeCardContentVariants> {}

const StoreCardContent = React.forwardRef<
  HTMLDivElement,
  StoreCardContentProps
>(({ className, variant, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(storeCardContentVariants({ variant }), className)}
      {...props}
    />
  );
});

StoreCardContent.displayName = "StoreCardContent";

export { StoreCardContent, storeCardContentVariants };
