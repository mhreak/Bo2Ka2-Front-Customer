import React, { useState } from "react";
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

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState("ظروف");
  const [isLiked, setIsLiked] = useState(false);

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

  return (
    <div className="w-full relative">
      <div className="flex flex-row justify-start items-center gap-8 overflow-x-auto overflow-y-hidden py-4 px-2 scroll-smooth hide-scrollbar">
        {categories.map((category) => (
          <div key={category.id} className="relative">
            <div className="bg-[#EED5FF] size-13 rounded-full" />
            <Image
              src={category.imageSrc}
              alt={category.id}
              width={120}
              height={140}
              className="absolute bottom-2 right-0"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
