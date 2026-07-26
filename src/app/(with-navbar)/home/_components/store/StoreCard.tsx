import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const storeCardVariants = cva(
  "relative rounded-3xl bg-card shadow-sm overflow-hidden pb-6",
  {
    variants: {
      variant: {
        default: "",
        bordered: "border",
        elevated: "shadow-lg",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface StoreCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof storeCardVariants> {
  badge?: React.ReactNode;
}

const StoreCard = React.forwardRef<HTMLDivElement, StoreCardProps>(
  ({ className, variant, badge, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(storeCardVariants({ variant }), className)}
        {...props}
      >
        {children}

        {badge && (
          <div className="absolute top-40 right-4 z-20 -translate-y-1/2">
            {badge}
          </div>
        )}
      </div>
    );
  }
);

StoreCard.displayName = "StoreCard";

export { StoreCard };