import * as React from "react";
import Image from "next/image";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const storeCardImageVariants = cva("relative overflow-hidden mb-8", {
  variants: {
    variant: {
      default: "h-40",
      sm: "h-32",
      lg: "h-52",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const imageVariants = cva("object-cover", {
  variants: {
    rounded: {
      true: "rounded-t-3xl",
      false: "",
    },
  },
  defaultVariants: {
    rounded: true,
  },
});

const badgeVariants = cva(
  "absolute -bottom-5 right-3 z-100 flex h-12 w-12 items-center justify-center rounded-full border-4 border-background bg-card shadow-md",
  {
    variants: {
      variant: {
        default: "",
        primary: "bg-primary text-primary-foreground",
        secondary: "bg-secondary text-secondary-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface StoreCardImageProps
  extends
    Omit<React.HTMLAttributes<HTMLDivElement>, "children">,
    VariantProps<typeof storeCardImageVariants> {
  src: string;
  alt: string;

  width?: number;
  height?: number;

  rounded?: VariantProps<typeof imageVariants>["rounded"];

  imageClassName?: string;
  badgeClassName?: string;
}

const StoreCardImage = React.forwardRef<HTMLDivElement, StoreCardImageProps>(
  (
    {
      className,
      variant,

      src,
      alt,

      width = 500,
      height = 320,

      rounded,

      imageClassName,
      badgeClassName,

      ...props
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={cn(storeCardImageVariants({ variant }), className)}
        {...props}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={cn(
            "h-full w-full",
            imageVariants({ rounded }),
            imageClassName,
          )}
        />
      </div>
    );
  },
);

StoreCardImage.displayName = "StoreCardImage";

export { StoreCardImage, storeCardImageVariants, badgeVariants };
