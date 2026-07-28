import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
export interface ImageSelectItem {
  id: number;
  title: string;
  imagePath: string;
  imageClassName?: string;
}

interface Props {
  items: ImageSelectItem[];
  selectedId?: number;
  onSelect: (id: number) => void;
  className?: string;
  imageClassName?: string;
  headerText?: string;
}

export default function ImageSelect({
  items,
  selectedId,
  onSelect,
  className,
  imageClassName,
  headerText,
}: Props) {
  return (
    <>
      {headerText && (
        <h3 className="font-semibold text-xl text-right mb-2">{headerText}</h3>
      )}
      <div
        className={cn(
          "flex flex-row gap-8 overflow-x-auto hide-scrollbar pt-6",
          className,
        )}
      >
        {items.map((item) => {
          return (
            <div className="flex flex-col gap-4" key={item.id}>
              <div className="relative size-18 bg-gradient rounded-lg overflow-visible">
                <Image
                  src={item.imagePath}
                  alt={item.title}
                  width={64}
                  height={64}
                  className={cn(
                    "absolute bottom-4 left-0 scale-150 object-contain",
                    imageClassName,
                    item.imageClassName
                  )}
                />
              </div>
              <span className="text-muted-foreground text-md">
                {item.title}
              </span>
            </div>
          );
        })}
      </div>
    </>
  );
}
