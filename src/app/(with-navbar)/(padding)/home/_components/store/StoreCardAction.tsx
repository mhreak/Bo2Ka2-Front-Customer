import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const storeCardActionVariants = cva("flex", {
  variants: {
    variant: {
      default: "justify-start",
      center: "justify-center",
      end: "justify-end",
      between: "justify-between",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface StoreCardActionProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof storeCardActionVariants> {}

const StoreCardAction = React.forwardRef<
  HTMLDivElement,
  StoreCardActionProps
>(({ className, variant, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(storeCardActionVariants({ variant }), className)}
    {...props}
  />
));

StoreCardAction.displayName = "StoreCardAction";

export {
  StoreCardAction,
  storeCardActionVariants,
};