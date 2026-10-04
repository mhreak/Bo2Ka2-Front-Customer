"use client";

import React, { useEffect, useState } from "react";
import {
  Coffee,
  Shirt,
  Flower2,
  Palmtree,
  Gem,
  ChevronDown,
  Star,
  ShoppingBag,
  Heart,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ProductCategory } from "@/types/api/endpointTypes/productCategory.types";
import productCategoriesApi from "@/api/services/ApiService/productCategories";
import { useApi } from "./../../../../../../hooks/useApi";
import { APIGetTemplate } from "@/types/api/commonApiTypes";
import { Skeleton } from "@/components/ui/skeleton";

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState("ظروف");
  const [isLiked, setIsLiked] = useState(false);

  const {
    data: productCategoriesData,
    isLoading: productCategoriesLoading,
    execute: getProductCategories,
  } = useApi<APIGetTemplate<ProductCategory[]>, { asTree: boolean }>(
    productCategoriesApi.getAll,
  );

  useEffect(() => {
    getProductCategories({ asTree: false });
  }, []);

  const categories = [
    {
      id: "ظروف",
      icon: <Coffee className="w-5 h-5" />,
      color: "from-amber-400 to-orange-500",
      bgColor: "bg-amber-50",
      hoverColor: "hover:border-amber-400",
      count: 124,
      imageSrc: "/samples/sample-category-1.png",
    },
    {
      id: "مدولباس",
      icon: <Shirt className="w-5 h-5" />,
      color: "from-blue-400 to-indigo-500",
      bgColor: "bg-blue-50",
      hoverColor: "hover:border-blue-400",
      count: 89,
      imageSrc: "/samples/sample-category-1.png",
    },
    {
      id: "سزرگی",
      icon: <Flower2 className="w-5 h-5" />,
      color: "from-green-400 to-emerald-500",
      bgColor: "bg-green-50",
      hoverColor: "hover:border-green-400",
      count: 67,
      imageSrc: "/samples/sample-category-1.png",
    },
    {
      id: "دکوراتیو",
      icon: <Palmtree className="w-5 h-5" />,
      color: "from-purple-400 to-pink-500",
      bgColor: "bg-purple-50",
      hoverColor: "hover:border-purple-400",
      count: 93,
      imageSrc: "/samples/sample-category-1.png",
    },
    {
      id: "زیورالک",
      icon: <Gem className="w-5 h-5" />,
      color: "from-rose-400 to-red-500",
      bgColor: "bg-rose-50",
      hoverColor: "hover:border-rose-400",
      count: 56,
      imageSrc: "/samples/sample-category-1.png",
    },
  ];

  if (productCategoriesLoading)
    return (
      <div className="flex items-center justify-start gap-4 lg:justify-center overflow-x-auto hide-scrollbar show-scrollbar">
        {Array.from({ length: 8 }).map((_, i) => (
          <Skeleton
            key={i + 1}
            className="size-20 rounded-full min-w-20 lg:min-w-0"
          />
        ))}
      </div>
    );

  return (
    <div className="w-full relative">
      <div className="flex flex-row justify-start items-center gap-8 overflow-x-auto overflow-y-hidden py-4 px-2 scroll-smooth hide-scrollbar show-scrollbar lg:justify-between lg:px-0">
        {productCategoriesData?.data.map((category) => (
          <div
            key={category.id}
            className="relative flex flex-col justify-between h-full items-center gap-2"
          >
            <div className="relative bg-[#EED5FF] size-14 rounded-full mb-auto flex-center">
              <div className="relative size-20 aspect-square">
                <Image
                  src={category.imagePath || "/samples/sample-category-1.png"} //TODO: replace with default product catecory image
                  alt={category.name}
                  fill
                  className="absolute bottom-1 right-0"
                />
              </div>
            </div>
            <span className="text-sm text-muted-foreground text-center">
              {category.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
