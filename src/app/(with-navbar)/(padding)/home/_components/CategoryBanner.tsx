import { cn } from "@/lib/utils";
import Image from "next/image";

interface Props {
  title?: string;
  imageSrc: string;
  alt?: string;
  width?: number;
  height?: number;
  imageClassName?: string;
  onClick?: () => void;
}

const CategoryBanner = ({
  title,
  imageSrc,
  alt = "image-" + imageSrc,
  width = 170,
  height = 114,
  imageClassName,
  onClick,
}: Props) => {
  return (
    <div className="relative" onClick={onClick}>
      <Image
        src={imageSrc}
        alt={alt}
        width={width}
        height={height}
        className={cn("rounded-2xl object-contaied", imageClassName)}
      />
      {title && (
        <h3 className="font-medium text-2xl absolute top-5 right-3 text-white">
          {title}
        </h3>
      )}
    </div>
  );
};

export default CategoryBanner;
