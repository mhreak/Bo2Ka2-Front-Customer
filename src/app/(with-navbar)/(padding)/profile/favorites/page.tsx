"use client";
import SharedProfileHeader from "../_components/SharedProfileHeader";
import { ListSortDescending } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FavoriteProductItem } from "./_components/FavoriteProductItem";
import { ProductSection } from "@/components/product/ProductSection";
import { ProductSectionHeader } from "@/components/product/ProductSectionHeader";
import { SectionContent } from "@/components/SectionContent";
import { ProductItem } from "@/components/product/ProductItem";

export interface Product {
  id: number;
  title: string;
  category: string;
  price: number;
  image: string;
  isFavorite: boolean;
}

export const mockProducts: Product[] = [
  {
    id: 1,
    title: "ساعت مچی کلاسیک",
    category: "مجموعه مشتریان",
    price: 150000,
    image: "/samples/sample-product-10.jpg",
    isFavorite: true,
  },
  {
    id: 2,
    title: "شمع معطر وانیلی",
    category: "مجموعه مشتریان",
    price: 150000,
    image: "/samples/sample-product-11.jpg",
    isFavorite: true,
  },
  {
    id: 3,
    title: "ست گیلاس کریستالی",
    category: "مجموعه مشتریان",
    price: 150000,
    image: "/samples/sample-product-12.jpg",
    isFavorite: true,
  },
];

export default function FavoritesPage() {
  return (
    <div>
      <SharedProfileHeader title="علاقه مندی ها" className="mb-8" />
      <div className="flex-between">
        <p className="text-muted-foreground">محصولات ذخیره شده</p>
        <Button variant={"link"} className={"text-accent"}>
          <ListSortDescending className="text-accent" />
          <span>مرتب کردن</span>
        </Button>
      </div>
      {mockProducts.map((product) => (
        <FavoriteProductItem
          key={product.id}
          imagePath={product.image}
          title={product.title}
          description={product.category}
          price={product.price}
          onAddToCart={() => {}}
          onLike={() => {}}
        />
      ))}
      <ProductSection className="mt-5">
        <ProductSectionHeader title="پیشنهادی" />
        <SectionContent>
          <ProductItem
            imageSrc="/samples/sample-product-13.jpg"
            title="مجموعه اسانس های گیاهی"
            discountedPrice={180000}
            price={150000}
            discountPercent={20}
          />
          <ProductItem
            imageSrc="/samples/sample-product-14.jpg"
            title="مجموعه اسانس های گیاهی"
            discountedPrice={180000}
            price={"150000"}
          />
        </SectionContent>
      </ProductSection>
    </div>
  );
}
