import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface BoxScentItemProps {
  scentId: number;
  title: string;
  imagePath:string;
  isSelected: boolean;
  onSelect: (id: number) => void;
}

export default function BoxScentItem({
  scentId,
  title,
  imagePath,
  isSelected,
  onSelect,
}: BoxScentItemProps) {
  return (
    <button
      type="button"
      onClick={() => onSelect(scentId)}
      className="group flex flex-col items-center gap-2"
    >
      <div
        className={cn(
          "relative flex size-18 m-3 items-center justify-center overflow-hidden rounded-lg border bg-muted transition-all duration-200",
          isSelected && "ring-2 ring-primary ring-offset-2"
        )}
      >
        <Image src={imagePath} alt={title} fill className="object-cover" />

        {isSelected && (
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{
              backgroundColor: "rgba(155, 126, 249, 0.4)",
            }}
          >
            <Check size={16} className="text-white" />
          </div>
        )}
      </div>

      <p
        className={cn(
          "text-lg font-medium text-muted-foreground transition-colors",
          isSelected && "text-gradient"
        )}
      >
        {title}
      </p>
    </button>
  );
}
