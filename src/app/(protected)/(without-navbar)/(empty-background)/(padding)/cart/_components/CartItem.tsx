import Image from "next/image";
import React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { Trash2, X } from "lucide-react";

import { cn } from "@/lib/utils";
import Quantity from "@/components/shared/Quantity";
import { toPersianDigits } from "@/utils/numberConversions";

const cartItemVariants = cva(
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
  }
);

export interface CartItemProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cartItemVariants> {
  imagePath: string;
  title: string;
  description?:string;
  price: number | string;
  quantity?: number;
  onQuantityChange: (val:number) => void;
  onRemove?: () => void;
}

const CartItem = React.forwardRef<HTMLDivElement, CartItemProps>(
  (
    {
      className,
      variant,
      imagePath,
      title,
      description,
      price,
      quantity = 1,
      onQuantityChange,
      onRemove,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(cartItemVariants({ variant }), className)}
        {...props}
      >
        <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-lg">
          <Image
            src={imagePath}
            alt={title}
            fill
            className="object-cover"
          />
        </div>

        <div className="flex flex-1 flex-col justify-between">
          <div>
            <h3 className="font-semibold text-xl">{title}</h3>
            {description && <p className="mt-1 text-sm text-muted-foreground">
             {description}
            </p>}
          </div>

          <div className="mt-2 flex items-center justify-between">

              <Quantity value={quantity} onChange={onQuantityChange}/>

            <span className="font-bold text-lg text-foreground">
              {toPersianDigits(price.toLocaleString())} تومان
            </span>         
          </div>
        </div>
         {onRemove && (
              <button
                type="button"
                onClick={onRemove}
                className="text-muted-foreground transition-opacity hover:opacity-70 absolute top-3 left-3"
              >
                <X size={18} />
              </button>
            )}
      </div>
    );
  }
);

CartItem.displayName = "CartItem";

export { CartItem, cartItemVariants };