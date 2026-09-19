"use client";

import BackButton from "@/components/shared/BackButton";
import { CartItem } from "./_components/CartItem";
import { Button } from "@/components/ui/button";
import { Link } from "next-view-transitions";

const CartPage = () => {
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
          {Array.from({ length: 2 }).map((_, i) => (
            <CartItem
              key={i}
              imagePath={`/samples/sample-product-${i % 2 ? "8" : "7"}.jpg`}
              title="چراغ رومیزی"
              description="نور گرم/ درخشش گرم"
              price={300000}
              quantity={1}
              onQuantityChange={() => {}}
              onRemove={() => {}}
            />
          ))}
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
