import { ChevronDown } from "lucide-react";
import Image from "next/image";
import React from "react";

interface CategoryItemProps {
  imageUrl: string;
  title: string;
  // link: string;
}

export default function CategoryItem({ imageUrl, title }: CategoryItemProps) {
  return (
    <div className="border border-border/20 rounded-xl shadow-slate-100 shadow-2xl flex flex-row items-center gap-4 p-2 mb-5">
      <Image
        src={imageUrl}
        alt={title}
        className="rounded-xl"
        width={64}
        height={64}
      />
      <h3 className="font-medium text-text text-xl flex-1">{title}</h3>
      <ChevronDown className="text-muted-foreground" />
    </div>
  );
}
