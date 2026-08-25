import Image from "next/image";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface RibbonItemProps {
  ribbonId: number;
  imagePath: string;
  title: string;
  isSelected: boolean;
  onSelect: (id: number) => void;
}

export default function RibbonItem({
  ribbonId,
  imagePath,
  title,
  isSelected,
  onSelect,
}: RibbonItemProps) {
  return (
    <button
      type="button"
      onClick={() => onSelect(ribbonId)}
      className="group flex flex-col items-center gap-2"
    >
      <div
        className={cn(
          "relative size-18 m-2 overflow-hidden rounded-full border transition-all duration-200 gradient-ring",
          isSelected && "ring-2 ring-primary ring-offset-2",
        )}
      >
        <Image src={imagePath} alt={title} fill className="object-cover" />

        {isSelected && (
          <div
            className="absolute inset-0 flex items-center justify-center bg-black/25 gradient-ring-content"
            style={{
              backgroundColor: isSelected ? "rgba(203, 163, 252, 0.3)" : "",
            }}
          >
            <Check size={16} className="text-white" />
          </div>
        )}
      </div>

      <p
        className={cn(
          "text-lg font-medium text-muted-foreground",
          isSelected && "text-gradient",
        )}
      >
        {title}
      </p>
    </button>
  );
}
