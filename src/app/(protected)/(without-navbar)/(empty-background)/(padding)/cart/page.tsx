"use client";

import BackButton from "@/components/shared/BackButton";
import { CartItem } from "./_components/CartItem";
import { Button } from "@/components/ui/button";
import { Link } from "next-view-transitions";
import { useCartStore } from "@/stores/cart/cart.store";

const CartPage = () => {
  const { addItem, setQuantity, removeItem, items } = useCartStore(
    (state) => state,
  );
  return (
    <div className="flex h-full flex-col gap-6 lg:grid lg:grid-cols-[1fr_20rem] lg:items-start lg:gap-8">
      <div className="h-full flex flex-col gap-6 lg:col-start-1">
        <div className="flex flex-row">
          <BackButton />
          <h3 className="flex-1 text-center text-2xl font-semibold">
            سبد خرید
          </h3>
        </div>
        <div className="flex-1 h-full">
          {items.length > 0 ? (
            items.map((product, i) => (
              <Link href={`/product/${product.id}`}>
                <CartItem
                  key={i}
                  imagePath={product.primaryImagePath || undefined}
                  title={product.name}
                  description={product.shopName}
                  price={product.effectivePrice}
                  quantity={product.quantity}
                  onQuantityChange={(val) => {
                    setQuantity(product.id, val);
                  }}
                  onRemove={() => {
                    removeItem(product.id);
                  }}
                />
              </Link>
            ))
          ) : (
            <div className="h-full flex-center">
              <h2 className="text-2xl font-medium text-muted-foreground">
                سبد خرید شما خالی است.
              </h2>
            </div>
          )}
        </div>
      </div>
      <div className="lg:col-start-2 lg:sticky lg:top-24">
        <Link href={"/cart/add-details"}>
          <Button variant={"secondary"} className="w-full">
            مرحله ی بعد
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CartPage;
